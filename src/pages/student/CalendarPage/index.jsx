import React, { Component } from "react";
import { connect } from "react-redux";

import { deleteUserInfoAction } from "@redux/actions";
import {
  reqStudentCalendar,
  reqStudentMyGroup,
} from "@api";

import { Layout, message } from "antd";

import TopNavBar from "@student-components/TopNavBarComponent";
import SideBar from "@student-components/SideBarComponent";
import Calendar from "@public-components/CalendarComponent";

import "./index.less";

const { Content } = Layout;

class CalendarPage extends Component {
  jumpPath = (path, mode = "push") => {
    this.props.history[mode](path);
  };

  state = {
    lessons: [],
    groups: [],
    currentGroup: 0,
  };

  componentDidMount() {
    let myGroups = [];
    reqStudentMyGroup()
      .then((res) => {
        res.forEach((el) => {
          myGroups.push({
            group: el.group.title,
            groupId: el.group.id,
          });
          if (!myGroups.length) {
            return undefined;
          }
          this.setState({ groups: myGroups });
        });

        if (!myGroups.length) {
          return undefined;
        }

        reqStudentCalendar({
          group: myGroups[this.state.currentGroup].groupId,
        })
          .then((res) => {
            this.setState({ lessons: res });
          })
          .catch((err) => {
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
      })
      .catch((err) => {
        console.log("Calendar err: ", err);
      });
  }

  changeCurrentGroup = (currentGroupNumber) => {
    this.setState({ currentGroup: currentGroupNumber });

    reqStudentCalendar({
      group: this.state.groups[currentGroupNumber].groupId,
    })
      .then((res) => {
        this.setState({ lessons: res });
      })
      .catch((err) => {
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
  };

  render() {
    const { jumpPath } = this;
    const { deleteUserInfo } = this.props;
    const { collapsed } = this.props.page;
    const { pathname: currentPath } = this.props.location;

    return (
      <section className="student-calendar-page">
        <SideBar
          currentPath={currentPath}
          jumpPath={jumpPath}
        />
        <Layout>
          <TopNavBar
            jumpPath={jumpPath}
            logout={deleteUserInfo}
          />
          <Content
            className="student-calendar-page__student-calendar-page-content"
            style={{
              maxWidth: collapsed ? "100%" : "",
              backgroundColor: "#fff",
            }}
          >
            <div className="page-content">
              <Calendar
                lessons={this.state.lessons}
                currentGroup={this.state.currentGroup}
              />
            </div>

            <section className="page-navbar">
              <h1 className="settings-page__navbar-header">
                Группы
              </h1>
              <nav className="settings-page__navbat-nav">
                <ul className="settings-page__navbar-wrap">
                  {this.state.groups.length ? (
                    this.state.groups.map((el, idx) => {
                      return (
                        <li
                          key={el.groupId + idx * 6}
                          onClick={() => {
                            this.changeCurrentGroup(idx);
                          }}
                          className={`settings-page__navbar-link ${
                            idx === this.state.currentGroup
                              ? "settings-page__navbar-link-active"
                              : ""
                          }`}
                        >
                          {el.group}
                        </li>
                      );
                    })
                  ) : (
                    <li
                      className={`settings-page__navbar-link `}
                    >
                      Нет Группы
                    </li>
                  )}
                </ul>
              </nav>
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
)(CalendarPage);
