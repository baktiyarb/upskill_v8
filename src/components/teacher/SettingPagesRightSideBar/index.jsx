import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { deleteUserInfoAction } from "@redux/actions";

import "./index.less";

class SettingPagesRightSideBar extends Component{
  render(){
    
    let { userType } = this.props.user;
    // admin test
    userType = "AD"


    return(
      <section className="settings-page__navbar">
        <h1 className="settings-page__navbar-header">Настройки</h1>
        <nav className="settings-page__navbat-nav">
          <ul className="settings-page__navbar-wrap">
              <li className={`settings-page__navbar-link ${window.location.pathname === "/teacher_profile" || window.location.pathname === "/admin-settings"  ? "settings-page__navbar-link-active" : ""}`}>
                  <Link
                    to="/teacher_profile"
                    className="settings-page__navbar-link__href"
                  >
                    Профиль
                  </Link>
              </li>

              {userType === "AD" 
               ? <li className={`settings-page__navbar-link ${window.location.pathname === "/admin-payinfo"  ? "settings-page__navbar-link-active" : ""}`}>
                    <Link
                      to="/admin-payinfo"
                      className="settings-page__navbar-link__href"
                    >
                      Платёжная информация
                    </Link>
                  </li>
                : null}

              {userType === "AD" 
               ? <li className={`settings-page__navbar-link ${window.location.pathname === "/admin-history"  ? "settings-page__navbar-link-active" : ""}`}>
                    <Link
                      to="/admin-history"
                      className="settings-page__navbar-link__href"
                    >
                      История платежей
                    </Link>
                  </li>
                : null}
              {userType === "AD" 
               ? <li className={`settings-page__navbar-link ${window.location.pathname === "/admin-parents"  ? "settings-page__navbar-link-active" : ""}`}>
                    <Link
                      to="/admin-parents"
                      className="settings-page__navbar-link__href"
                    >
                      Связать родителей
                    </Link>
                  </li>
                : null}
          </ul>
        </nav>
      </section>
    )
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  deleteUserInfo: () => dispatch(deleteUserInfoAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingPagesRightSideBar);