import React, { Component } from "react";
import { connect } from "react-redux";

import { deleteUserInfoAction } from "@redux/actions";
import { reqStudentStatisticInfo } from "@api";

import { Layout, message } from "antd";
import Highcharts from "highcharts";

import TopNavBar from "@student-components/TopNavBarComponent";
import SideBar from "@student-components/SideBarComponent";

import "./index.less";

const { Content } = Layout;

class StatisticsPage extends Component {
  jumpPath = (path, mode = "push") => {
    this.props.history[mode](path);
  };

  state = { performance: 0, attendance: 0 };

  componentDidMount() {
    // Charts

    Highcharts.chart("performance-canvas", {
      credits: {
        enabled: false,
      },
      chart: {
        type: "pie",
      },
      title: {
        text: "Представление",
      },
      // subtitle: {
      // text: 'Click the slices to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>',
      // },

      accessibility: {
        announceNewData: {
          enabled: false,
        },
        point: {
          valueSuffix: "%",
        },
      },

      plotOptions: {
        series: {
          dataLabels: {
            enabled: false,
            format: "{point.name}: {point.y:.1f}%",
          },
        },
      },

      tooltip: {
        headerFormat:
          '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat:
          '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
      },

      series: [
        {
          name: "Представление",
          colorByPoint: true,
          data: [
            {
              name: "A",
              y: 64,
            },
            {
              name: "B",
              y: 36,
            },
          ],
        },
      ],
    });

    reqStudentStatisticInfo()
      .then((res) => {
        this.setState({
          performance: res.PerformancePercent.grades,
          attendance: 100 - res.PerformancePercent,
        });

        const labels = [13.03, 15.03, 20.03, 21.03];
        const data = {
          labels: labels,
          datasets: [
            {
              label: "My First Dataset",
              data: [65, 59, 80, 81],
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        };
      })
      .catch((err) => {
        console.log(err);
        try {
          message.error(
            Object.values(err.response.data)[0]
          );
        } catch {
          message.error(
            "Сервер не работает, повторите попытку позже"
          );
        }
      });
  }

  render() {
    const { jumpPath } = this;
    const { deleteUserInfo } = this.props;
    const { collapsed } = this.props.page;

    return (
      <section className="staticstic-page">
        <SideBar
          currentPath={this.props.location.pathname}
          jumpPath={jumpPath}
        />
        <Layout>
          <TopNavBar
            jumpPath={jumpPath}
            logout={deleteUserInfo}
          />
          <Content
            className="staticstic-page__staticstic-page-content"
            style={{
              background: "#fff",
              maxWidth: collapsed ? "" : "100%",
            }}
          >
            <section className="staticstic__content">
              <div className="performance-wrap">
                <figure
                  id="performance-canvas"
                  width="600px"
                  height="400px"
                ></figure>
              </div>
            </section>
          </Content>
        </Layout>
      </section>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  deleteUserInfo: () => dispatch(deleteUserInfoAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatisticsPage);
