import React, { Component, useState } from "react";
import { connect } from "react-redux";
import shortid from "shortid";

import { deleteUserInfoAction } from "@redux/actions";

import { Layout } from "antd";

import TopNavBar from "@student-components/TopNavBarComponent";
import SideBar from "@student-components/SideBarComponent";
import SettingPagesRightSideBar from "@teacher-components/SettingPagesRightSideBar";

const { Content } = Layout;

class AdminSettingsPage extends Component {
  state = {
    email: '',
    phone: '',
    newPassword: '',
    succesPassword: '',
    file: '',
    imagePreviewUrl: '',
    class: false,
    photo: false
  }

  jumpPath = (path, mode = "push") => {
    this.props.history[mode](path);
  };

  toggleClass = () => {
    this.setState({class: !this.state.class})
  }

  handleUpdateInfo = (e) => {
    e.preventDefault();

    console.log(this.state)
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.file);
  }

  handleImageChange(e){
    e.preventDefault()

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      })
    }

    reader.readAsDataURL(file)
  }

  render() {
    const { jumpPath } = this;

    const { deleteUserInfo ,user} = this.props;
    const { collapsed } = this.props.page;

    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl){
      $imagePreview = (<img className="ava" src={imagePreviewUrl} />)
    }

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
            <div className="settings-page__content">
              <div className="settings-page__content-profile">
                  <div className="settings-page__content-profile__edit">
                  <div className="settings-page__content__edit-header">
                <h1 className="settings-page__content__edit-header-name">
                  Асланбек Бориков
                </h1>
                <h2 className="settings-page__content__edit-header-date">
                  23.02.2005
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
                          onChange={(c) => {
                            this.setState({
                              phone: c.target.value,
                            });
                          }}
                          maxLength={11}
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
                          value={this.state.succesPassword}
                          onChange={(c) => {
                            this.setState({
                              succesPassword: c.target.value,
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
                      <div
                        id="parents"
                        className={`settings-page__content-profile__edit-parent settings-page__content-profile__edit-infopar-item ${
                          this.state.parentsWrap
                            ? "settings-page__content-profile__edit-parent_active"
                            : ""
                        }`}
                      >
                   
                   
                   
                   
                   
                   
                        <div
                          className={`settings-page__content-profile__edit-parent-wrap ${this.state.class ? 'settings-page__content-profile__edit-parent-wrap_photo' : ''} ${this.state.file === '' ?  '' : 'photo'}`}
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
                              Добавить или обновить фото
                            </p>
                          </div>
                          <div className="settings-page__content-profile__edit-parent-wrap_photo-wrap">
                            <form onSubmit={(e)=>this.handleSubmit(e)}>
                              <input className="fileInput" 
                                type="file" 
                                onChange={(e)=>this.handleImageChange(e)} />
                              <button className={`submitButton ${this.state.file ? '' : 'submitButtonOff'}`} 
                                type="submit" 
                                onClick={(e)=>this.handleSubmit(e)}>Upload Image</button>
                            </form>
                            <div className="imgPreview">
                              {$imagePreview}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <SettingPagesRightSideBar />
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
)(AdminSettingsPage);
