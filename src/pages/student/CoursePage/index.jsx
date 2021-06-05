import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import shortid from "shortid";

import { deleteUserInfoAction } from "@redux/actions";
import {
  reqStudentMyCourses,
  reqStudentLessonsList,
  reqStudentLessonContent,
} from "@api";

import { Layout, Menu, Dropdown, message } from "antd";
import { DownOutlined } from "@ant-design/icons";

import TopNavBar from "@student-components/TopNavBarComponent";
import SideBar from "@student-components/SideBarComponent";

import "./index.less";

const { Content } = Layout;

class CoursePage extends Component {
  state = {
    courses: [],
    currentCourse: 0, // array idx
    chapters: {},
    currentChapter: 0, // array idx
    currentSubChapter: 0, // array idx
    courseContent: {},
  };

  componentDidMount = () => {
    reqStudentMyCourses()
      .then((res) => {
        if (!res.length) {
          // None Data
          return undefined;
        }
        this.setState({ courses: res });

        reqStudentLessonsList({
          group:
            this.state.courses[this.state.currentCourse]
              .group,
        })
          .then((res) => {
            this.setState({ chapters: res });

            let contentId;
            Object.values(this.state.chapters).forEach(
              (el, idx) => {
                if (idx === this.state.currentChapter) {
                  if (Array.isArray(el)) {
                    contentId =
                      el.slice(1)[
                        this.state.currentSubChapter
                      ].id;
                  } else {
                    contentId = el.id;
                  }
                }
              }
            );

            reqStudentLessonContent(contentId)
              .then((res) => {
                this.setState({ courseContent: res });
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

  componentWillUnmount = () => {};

  jumpPath = (path, mode = "push") => {
    this.props.history[mode](path);
  };

  changeCourse = (courseId) => {
    this.setState({ currentCourse: courseId });

    reqStudentLessonsList({
      group: this.state.courses[courseId].group,
    })
      .then((res) => {
        this.setState({
          chapters: Object.assign({}, res),
        });

        let contentId;
        Object.values(this.state.chapters).forEach(
          (el, idx) => {
            if (idx === this.state.currentChapter) {
              if (Array.isArray(el)) {
                contentId =
                  el.slice(1)[this.state.currentSubChapter]
                    .id;
              } else {
                contentId = el.id;
              }
            }
          }
        );

        reqStudentLessonContent(contentId)
          .then((res) => {
            this.setState({
              courseContent: Object.assign({}, res),
            });
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

  changeChapter = (chapterIdx, subChapterIdx) => {
    this.setState({
      currentChapter: chapterIdx,
      currentSubChapter: subChapterIdx,
    });

    let contentId;
    Object.values(this.state.chapters).forEach(
      (el, idx) => {
        if (idx === this.state.currentChapter) {
          if (Array.isArray(el)) {
            contentId =
              el.slice(1)[this.state.currentSubChapter].id;
          } else {
            contentId = el.id;
          }
        }
      }
    );

    reqStudentLessonContent(contentId)
      .then((res) => {
        this.setState({
          courseContent: Object.assign({}, res),
        });
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
    const { jumpPath, changeCourse, changeChapter } = this;
    const {
      courseContent,
      courses,
      currentCourse,
      chapters,
      currentChapter,
      currentSubChapter,
    } = this.state;
    const { deleteUserInfo } = this.props;
    const { collapsed } = this.props.page;

    const menu = (
      <Menu>
        {courses.length === 0 ? (
          <Menu.Item disabled={true}>Нет Урока</Menu.Item>
        ) : (
          courses.map((el, idx) => {
            return (
              <Menu.Item
                key={shortid.generate()}
                onClick={() => {
                  changeCourse(idx);
                }}
                disabled={idx === currentCourse}
              >
                {el.course}
              </Menu.Item>
            );
          })
        )}
      </Menu>
    );

    return (
      <section className="course-page">
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
            className="course-page__course-page-content"
            style={{
              maxWidth: collapsed ? "" : "100%",
            }}
          >
            <div className="course-page__content">
              <div
                className="course-content"
                dangerouslySetInnerHTML={{
                  __html: courseContent.body
                    ? courseContent.body
                    : "<div style='display: flex; justify-content: center; align-items: center'><p>Нет Урока</p></div>",
                }}
              ></div>
            </div>

            <div className="course-page__content-navbar">
              <Dropdown overlay={menu} trigger={["click"]}>
                <h1 className="navbar__title">
                  {courses[currentCourse] === undefined
                    ? "Нет Урока"
                    : courses[currentCourse].course}{" "}
                  <DownOutlined />
                </h1>
              </Dropdown>

              <div className="navbar__list">
                {Object.keys(chapters).map((el, i) => {
                  if (Array.isArray(chapters[el])) {
                    return (
                      <Fragment key={shortid.generate()}>
                        <div
                          className={`list__item-drop ${
                            i === currentChapter
                              ? "list__item--active"
                              : ""
                          }`}
                          onClick={() => {
                            changeChapter(i, 0);
                          }}
                        >
                          {el}
                        </div>
                        <div
                          className={`list__item-drop-list ${
                            i === currentChapter
                              ? "drop-list--open"
                              : "drop-list--close"
                          }`}
                        >
                          {chapters[el]
                            .slice(1)
                            .map((elem, j) => {
                              return (
                                <div
                                  key={shortid.generate()}
                                  className={`dorp-list__item ${
                                    j === currentSubChapter
                                      ? "drop-list__item--active"
                                      : ""
                                  }`}
                                  onClick={() => {
                                    changeChapter(i, j);
                                  }}
                                >
                                  {elem.title}
                                </div>
                              );
                            })}
                        </div>
                      </Fragment>
                    );
                  } else {
                    return (
                      <div
                        key={shortid.generate()}
                        className={`list__item ${
                          i === currentChapter
                            ? "list__item--active"
                            : ""
                        }`}
                        onClick={() => {
                          changeChapter(i, 0);
                        }}
                      >
                        {el}
                      </div>
                    );
                  }
                })}
              </div>
            </div>
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
)(CoursePage);
