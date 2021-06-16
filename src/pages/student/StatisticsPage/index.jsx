import React, { Component } from "react";
import { connect } from "react-redux";

import { deleteUserInfoAction } from "@redux/actions";
import { reqStudentStatisticInfo } from "@api";

import { Layout, message } from "antd";

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

        // new Chart(
        //   document.getElementById("performance-canvas"),
        //   {
        //     type: "line",
        //     data: data,
        //   }
        // );
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
                <canvas
                  id="performance-canvas"
                  width="600px"
                  height="400px"
                ></canvas>
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
