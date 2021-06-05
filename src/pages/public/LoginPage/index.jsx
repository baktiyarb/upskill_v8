import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { message } from "antd";

import { localStorage } from "@utils";
import { updateUserInfoAction } from "@redux/actions";

import LoginTemplate from "@public-components/LoginTemplate";

import { reqLoginWithPhone, reqLoginWithEmail } from "@api";

import "./index.less";

class LoginPage extends Component {
  handleLoginSubmit = (event) => {
    event.preventDefault();

    let { username, password } = this;
    username = username.value;
    password = password.value;

    if (username.indexOf("@") !== -1) {
      reqLoginWithEmail({
        email: username,
        password,
      })
        .then((res) => {
          const {
            access_token: jwt,
            refresh_token: refreshJWT,
            user: { pk: id },
            user: { accepted },
            user: { status: userType },
            user: { email },
            user: { username },
            user: { first_name: firstName },
            user: { last_name: lastName },
          } = res;

          const userObj = {
            jwt,
            refreshJWT,
            id,
            accepted,
            userType,
            email,
            username,
            firstName,
            lastName,
          };

          localStorage.set("user", userObj);
          this.props.updateUserInfo(userObj);

          message.success("Вход успех", 1, () => {
            this.props.history.replace("/");
          });
        })
        .catch((err) => {
          message.error(err.detail);
        });
    } else {
      reqLoginWithPhone({
        phone: username,
        password,
      })
        .then((res) => {
          const {
            access_token: jwt,
            refresh_token: refreshJWT,
            user: { pk: id },
            user: { accepted },
            user: { status: userType },
            user: { email },
            user: { username },
            user: { first_name: firstName },
            user: { last_name: lastName },
          } = res;

          const userObj = {
            jwt,
            refreshJWT,
            id,
            accepted,
            userType,
            email,
            username,
            firstName,
            lastName,
          };

          localStorage.set("user", userObj);
          this.props.updateUserInfo(userObj);

          message.success("Вход успех", 1, () => {
            this.props.history.replace("/");
          });
        })
        .catch((err) => {
          message.error(err.detail);
        });
    }
  };

  render() {
    return (
      <LoginTemplate
        pageTitle="Вход"
        className="login-page"
      >
        <form
          className="login-form"
          onSubmit={this.handleLoginSubmit}
        >
          <input
            type="text"
            name="login-username"
            maxLength={40}
            required
            ref={(c) => {
              this.username = c;
            }}
            autoComplete="off"
            placeholder="Телефон номер или e-mail"
          />
          <input
            type="password"
            name="login-password"
            maxLength={40}
            required
            ref={(c) => {
              this.password = c;
            }}
            autoComplete="off"
            placeholder="Пароль"
          />
          <input
            type="checkbox"
            name="login-remember-me"
            defaultChecked
            ref={(c) => {
              this.rememberMe = c;
            }}
          />
          <span className="login-remember-me-text">
            Запомнить меня
          </span>

          <button type="submit">Войти</button>

          <p className="register-text">
            <span>Нет учетной записи?</span>
            <Link to="/register">Зарегистрируйтесь</Link>
          </p>

          <p className="forget-password-text">
            <a href="##">Забыли пароль?</a>
          </p>
        </form>
      </LoginTemplate>
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
)(LoginPage);
