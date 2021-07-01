import React, { Component } from "react";
import { connect } from "react-redux";

import { updateUserInfoAction } from "@redux/actions";

import { Layout, message } from "antd";

import {
  reqStudentProfile,
  reqStudentProfileInfo,
  reqStudentSearchParent,
} from "@api";

import TopNavBar from "@student-components/TopNavBarComponent";
import SideBar from "@student-components/SideBarComponent";
import SettingPagesRightSideBar from "@student-components/SettingPagesRightSideBar";

import "./index.less";

const { Content } = Layout;

class SettingProfilePage extends Component {
  state = {
    email: this.props.user.email,
    phone: "",
    birth_date: "",
    newPassword: "",
    rePassword: "",
    parentInfo: {},
    parentsWrap: false,
    searchParentInfo: "",
    searchResultParentInfo: "",
  };

  toggleClass = () => {
    this.setState({
      parentsWrap: !this.state.parentsWrap,
    });
  };

  jumpPath = (path, mode = "push") => {
    this.props.history[mode](path);
  };

  handleUpdateInfo = (e) => {
    e.preventDefault();

    const formData = {
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.newPassword,
    };

    if (this.state.newPassword !== this.state.rePassword) {
      message.warning("Два пароля несовместимы");
    } else {
      reqStudentProfile(this.props.user.id, formData)
        .then((res) => {
          if (res.success) {
            message.success("Успешно сохранено");
          } else {
            message.success("Не удалось сохранить");
          }
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
    }
  };

  componentDidMount = () => {
    const { id } = this.props.user;
    reqStudentProfileInfo(id)
      .then((res) => {
        if (res.parent.haveParent) {
          let parentInfo = {
            ...res.parent.parent,
            ...res.parent.parentProfile,
          };
          this.setState({ parentInfo });
        }

        this.setState({
          birth_date: res.profile.birth_date,
          phone: res.profile.phone,
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

  searchParentFunc = () => {
    let emailOrPhone = this.state.searchParentInfo.trim();
    if (emailOrPhone.length > 0) {
      var promise = reqStudentSearchParent(emailOrPhone);

      promise
        .then((res) => {
          console.log(res);
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
    } else {
      message.warning(
        "Введите правильный E-mail или телефон"
      );
    }
  };

  render() {
    const { jumpPath } = this;
    const { parentInfo } = this.state;
    const { pathname: currentPath } = this.props.location;

    return (
      <section className="settings-page">
        <SideBar
          currentPath={this.props.location.pathname}
          jumpPath={jumpPath}
        />
        <Layout>
          <TopNavBar jumpPath={jumpPath} />
          <Content
            className="settings-page__settings-page-content"
            style={{
              background: "#fff",
              maxWidth: this.props.page.collapse
                ? ""
                : "100%",
            }}
          >
            <section className="settings-page__content">
              <div className="settings-page__content-wrap">
                <div className="settings-page__content-profile">
                  <div className="settings-page__content-profile__edit">
                    <div className="settings-page__content__edit-header">
                      <h1 className="settings-page__content__edit-header-name">
                        {this.props.user.username}
                      </h1>
                      <h2 className="settings-page__content__edit-header-date">
                        {`${this.state.birth_date}`}
                      </h2>
                    </div>

                    <form
                      className="settings-page__content__edit-profile"
                      onSubmit={this.handleUpdateInfo}
                    >
                      <div className="settings-page__content__edit-profile-item">
                        <label
                          htmlFor="email"
                          className="settings-page__content__edit-profile-item__label"
                        >
                          E-mail
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="settings-page__content__edit-profile-item__input"
                          value={this.state.email}
                          onChange={(c) => {
                            this.setState({
                              email: c.target.value,
                            });
                          }}
                        />
                      </div>
                      <div className="settings-page__content__edit-profile-item">
                        <label
                          htmlFor="phone"
                          className="settings-page__content__edit-profile-item__label"
                        >
                          Номер телефона
                        </label>
                        <input
                          id="phone"
                          type="text"
                          className="settings-page__content__edit-profile-item__input"
                          value={this.state.phone}
                          maxLength={11}
                          onChange={(c) => {
                            if (
                              c.target.value.length !== 0
                            ) {
                              if (
                                /^\d+$/.test(c.target.value)
                              ) {
                                this.setState({
                                  phone: c.target.value,
                                });
                              } else {
                                message.warning(
                                  "Номер телефона должен быть номером"
                                );
                              }
                            } else {
                              this.setState({
                                phone: c.target.value,
                              });
                            }
                          }}
                        />
                      </div>
                      <div className="settings-page__content__edit-profile-item">
                        <label
                          htmlFor="newpass"
                          className="settings-page__content__edit-profile-item__label"
                        >
                          Новый пароль
                        </label>
                        <input
                          id="newpass"
                          type="password"
                          className="settings-page__content__edit-profile-item__input"
                          value={this.state.newPassword}
                          onChange={(c) => {
                            this.setState({
                              newPassword: c.target.value,
                            });
                          }}
                        />
                      </div>
                      <div className="settings-page__content__edit-profile-item">
                        <label
                          htmlFor="passconfirm"
                          className="settings-page__content__edit-profile-item__label"
                        >
                          Подтвердите пароль
                        </label>
                        <input
                          id="passconfirm"
                          type="password"
                          className="settings-page__content__edit-profile-item__input"
                          value={this.state.rePassword}
                          onChange={(c) => {
                            this.setState({
                              rePassword: c.target.value,
                            });
                          }}
                        />
                      </div>

                      <div className="settings-page__content__edit-profile-item__save">
                        <p className="settings-page__content__edit-profile-item__save-text">
                          Пароль должен содержать не меньше
                          8 символов, <br /> хотя бы одно
                          число и специальный символ
                        </p>
                        <input
                          className="settings-page__content__edit-profile-item__save-btn"
                          type="submit"
                          value="Сохранить"
                        />
                      </div>
                    </form>
                  </div>

                  <div className="settings-page__content-profile__edit-infopar">
                    {/*  */}

                    {Object.keys(this.state.parentInfo)
                      .length ? (
                      <div className="settings-page__content-profile__edit-information settings-page__content-profile__edit-infopar-item">
                        <div className="settings-page__content-profile__edit-information__header">
                          <h1 className="settings-page__content-profile__edit-information__header-name">
                            {`${parentInfo.first_name} ${parentInfo.last_name}`}
                          </h1>
                          <div className="settings-page__content-profile__edit-information__header-date">
                            {parentInfo.birth_date}
                          </div>
                        </div>
                        <div className="settings-page__content-profile__edit-information__data">
                          <p className="settings-page__content-profile__edit-information__data-phone">
                            {parentInfo.phone}
                          </p>
                          <p className="settings-page__content-profile__edit-information__data-email">
                            {parentInfo.email}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div
                        id="parents"
                        className={`settings-page__content-profile__edit-parent settings-page__content-profile__edit-infopar-item ${
                          this.state.parentsWrap
                            ? "settings-page__content-profile__edit-parent_active"
                            : ""
                        }`}
                      >
                        <div
                          className="settings-page__content-profile__edit-parent-wrap"
                          onClick={this.toggleClass}
                        >
                          <div className="settings-page__content-profile__edit-parent-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="30"
                              viewBox="0 0 30 30"
                              fill="none"
                            >
                              <path
                                d="M19.5393 21.3802C17.6702 20.7613 16.3194 20.7024 15 20.7024V30H27.4398C27.9581 30 28.4607 29.8822 28.9162 29.6464C29.5916 29.2928 30 28.7476 30 27.9372C29.9843 25.668 24.9424 23.1926 19.5393 21.3802Z"
                                fill="#C1C4D0"
                              />
                              <path
                                d="M10.445 21.3802C12.3141 20.7613 13.6806 20.7024 15 20.7024V30H2.56021C2.04188 30 1.53927 29.8822 1.08377 29.6464C0.408377 29.2928 0 28.7476 0 27.9372C0 25.668 5.05759 23.1926 10.445 21.3802Z"
                                fill="#C1C4D0"
                              />
                              <path
                                d="M15.2068 16.8602C19.7389 16.8602 23.4129 13.0859 23.4129 8.43008C23.4129 3.77427 19.7389 0 15.2068 0C10.6748 0 7.00079 3.77427 7.00079 8.43008C7.00079 13.0859 10.6748 16.8602 15.2068 16.8602Z"
                                fill="#C1C4D0"
                              />
                            </svg>
                            <p className="settings-page__content-profile__edit-parent-center-text">
                              Добавить родителя
                            </p>
                          </div>
                        </div>
                        <div className="settings-page__content-profile__edit-parent-wrap_active">
                          <div className="settings-page__content-profile__edit-parent-add__form">
                            <h1 className="settings-page__content-profile__edit-parent-add__header">
                              Добавить Родителя
                            </h1>
                            <div className="settings-page__content-profile__edit-parent-add__form-search">
                              <input
                                value={
                                  this.state
                                    .searchParentInfo
                                }
                                onChange={(e) => {
                                  this.setState({
                                    searchParentInfo:
                                      e.target.value,
                                  });
                                }}
                                className="settings-page__content-profile__edit-parent-add__form-input"
                                placeholder="E-mail или телефон"
                                type="text"
                              />
                              <button
                                onClick={
                                  this.searchParentFunc
                                }
                                className="settings-page__content-profile__edit-parent-add__form-button"
                              >
                                Найти
                              </button>
                            </div>
                            <div className="settings-page__content-profile__edit-parent-add__form-results">
                              <div className="settings-page__content-profile__edit-parent-add__form-results_found">
                                <h2 className="settings-page__content-profile__edit-parent-add__form-results_found-name">
                                  {
                                    this.state
                                      .searchResultParentInfo
                                  }
                                </h2>
                                {this.state
                                  .searchResultParentInfo ? (
                                  <button className="settings-page__content-profile__edit-parent-add__form-results_found-button">
                                    link
                                  </button>
                                ) : null}
                                <button
                                  className="settings-page__content-profile__register-parent-button"
                                  onClick={() => {
                                    this.props.history.push(
                                      "/register?status=PT"
                                    );
                                  }}
                                >
                                  Регистрация родителя
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/*  */}

                    {/*  */}
                  </div>
                </div>

                <div className="settings-page__content-sub">
                  <div className="settings-page__content-sub__header">
                    <h1 className="settings-page__content-sub__header-status">
                      Подписка активна
                    </h1>
                    <p className="settings-page__content-sub__header-all">
                      посмотреть всё
                    </p>
                  </div>
                  <div className="settings-page__content-sub__content">
                    <div className="settings-page__content-sub__content-item">
                      <div className="settings-page__content-sub__content-item__icon">
                        <div className="settings-page__content-sub__content-item__svg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="27"
                            height="21"
                            viewBox="0 0 27 21"
                            fill="none"
                          >
                            <path
                              d="M0 3.5C0 2.57174 0.355579 1.6815 0.988515 1.02513C1.62145 0.368749 2.47989 0 3.375 0H23.625C24.5201 0 25.3785 0.368749 26.0115 1.02513C26.6444 1.6815 27 2.57174 27 3.5V5.25H0V3.5ZM0 8.75V17.5C0 18.4283 0.355579 19.3185 0.988515 19.9749C1.62145 20.6313 2.47989 21 3.375 21H23.625C24.5201 21 25.3785 20.6313 26.0115 19.9749C26.6444 19.3185 27 18.4283 27 17.5V8.75H0ZM5.0625 12.25H6.75C7.19755 12.25 7.62677 12.4344 7.94324 12.7626C8.25971 13.0908 8.4375 13.5359 8.4375 14V15.75C8.4375 16.2141 8.25971 16.6592 7.94324 16.9874C7.62677 17.3156 7.19755 17.5 6.75 17.5H5.0625C4.61495 17.5 4.18572 17.3156 3.86926 16.9874C3.55279 16.6592 3.375 16.2141 3.375 15.75V14C3.375 13.5359 3.55279 13.0908 3.86926 12.7626C4.18572 12.4344 4.61495 12.25 5.0625 12.25Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <p className="settings-page__content-sub__content-item__name">
                          {" "}
                          Python: 4 уровень
                        </p>
                      </div>
                      <p className="settings-page__content-sub__content-item__date">
                        3 апреля, 2021
                      </p>
                      <p className="settings-page__content-sub__content-item__cost">
                        - 42 000 ₸
                      </p>
                      <div className="settings-page__content-sub__content-item__all">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="7"
                          height="31"
                          viewBox="0 0 7 31"
                          fill="none"
                        >
                          <path
                            d="M3.5 6.88894C5.433 6.88894 7 5.3468 7 3.44447C7 1.54214 5.433 0 3.5 0C1.567 0 0 1.54214 0 3.44447C0 5.3468 1.567 6.88894 3.5 6.88894Z"
                            fill="#C1C4D0"
                          />
                          <path
                            d="M3.5 18.9444C5.433 18.9444 7 17.4022 7 15.4999C7 13.5976 5.433 12.0554 3.5 12.0554C1.567 12.0554 0 13.5976 0 15.4999C0 17.4022 1.567 18.9444 3.5 18.9444Z"
                            fill="#C1C4D0"
                          />
                          <path
                            d="M3.5 31C5.433 31 7 29.4579 7 27.5556C7 25.6532 5.433 24.1111 3.5 24.1111C1.567 24.1111 0 25.6532 0 27.5556C0 29.4579 1.567 31 3.5 31Z"
                            fill="#C1C4D0"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <SettingPagesRightSideBar
              currentPath={currentPath}
            />
          </Content>
        </Layout>
      </section>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  updateUserInfo: (userObj) =>
    dispatch(updateUserInfoAction(userObj)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingProfilePage);
