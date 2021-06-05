import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./index.less";

export default class SettingPagesRightSideBar extends Component {
  render() {
    const { currentPath } = this.props;
    return (
      <section className="settings-page__navbar">
        <h1 className="settings-page__navbar-header">Настройки</h1>
        <nav className="settings-page__navbat-nav">
          <ul className="settings-page__navbar-wrap">
            <li
              className={`settings-page__navbar-link ${
                currentPath === "/setting_profile"
                  ? "settings-page__navbar-link-active"
                  : ""
              }`}
            >
              <Link
                to="/setting_profile"
                className="settings-page__navbar-link__href"
              >
                Профиль
              </Link>
            </li>
            <li className={`settings-page__navbar-link ${
                currentPath === "/setting_payment_history"
                  ? "settings-page__navbar-link-active"
                  : ""
              }`}>
              <Link
                to="/setting_payment_history"
                className="settings-page__navbar-link__href"
              >
                История платежей
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    );
  }
}
