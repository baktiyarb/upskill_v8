import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { reqRegister } from "@api";

import { message } from "antd";

import LoginTemplate from "@public-components/LoginTemplate";

import "./index.less";

class RegisterPage extends Component {
  state = {
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    password2: "",
    birthDate: "",
    step: 1,
  };

  changeStep = (event) => {
    let { targetStep } = event.target.dataset;
    targetStep = parseInt(targetStep);

    if (targetStep === 2) {
      if (
        [
          this.state.firstName,
          this.state.lastName,
          this.state.middleName,
          this.state.birthDate,
        ].some((el) => el === "")
      ) {
        message.warning("Заполните все");
      } else {
        this.setState({ step: targetStep });
      }
    } else {
      this.setState({ step: targetStep });
    }
  };

  handleRegisterSubmit = (event) => {
    event.preventDefault();

    if (
      [
        this.state.email,
        this.state.phone,
        this.state.password,
        this.state.password2,
      ].some((el) => el === "")
    ) {
      message.warning("Заполните все");
    } else {
      // check form
      let registerErrors = [];

      if (this.state.email.indexOf("@") === -1) {
        registerErrors.push(
          "Неправильный формат электронной почты"
        );
      }

      if (this.state.password !== this.state.password2) {
        registerErrors.push("Несогласованные пароли");
      }

      // send request

      if (registerErrors.length) {
        registerErrors.forEach((el) => {
          message.warning(el);
        });

        return undefined;
      }

      const registerFormData = {
        email: this.state.email,
        password1: this.state.password,
        password2: this.state.password2,
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        middle_name: this.state.middleName,
        phone: this.state.phone,
        birth_date: this.state.birthDate,
      };

      // userType
      if (this.props.location.search) {
        const [, userType] =
          this.props.location.search.split("=");

        registerFormData.status = userType;
      } else {
        registerFormData.status = "ST";
      }

      reqRegister(registerFormData)
        .then((res) => {
          message.success("Регистрация успех", 1, () => {
            this.props.history.push("/login");
          });
        })
        .catch((err) => {
          Object.values(err).forEach((el) => {
            message.error(el);
          });
        });
    }
  };

  render() {
    const { handleRegisterSubmit, changeStep } = this;
    const { step } = this.state;

    return (
      <LoginTemplate
        pageTitle="Регистрация"
        className="register-page"
      >
        <form
          className="register-form"
          onSubmit={handleRegisterSubmit}
        >
          <div
            className="step-1"
            style={{
              display: step === 1 ? "block" : "none",
            }}
          >
            <input
              type="text"
              className="register-last-name"
              maxLength={40}
              placeholder="Фамиля"
              onChange={(c) => {
                this.setState({ lastName: c.target.value });
              }}
            />
            <input
              type="text"
              className="register-first-name"
              maxLength={40}
              placeholder="Имя"
              onChange={(c) => {
                this.setState({
                  firstName: c.target.value,
                });
              }}
            />
            <input
              type="text"
              className="register-middle-name"
              maxLength={40}
              placeholder="Отчества"
              onChange={(c) => {
                this.setState({
                  middleName: c.target.value,
                });
              }}
            />
            <input
              type="date"
              title="День рожднения"
              className="register-birth-date"
              onChange={(c) => {
                this.setState({
                  birthDate: c.target.value,
                });
              }}
            />
            <div className="to-login">
              <span>Уже есть аккаунт?</span>
              <Link to="/login">Войти</Link>
            </div>
            <button
              type="button"
              data-target-step={2}
              onClick={changeStep}
            >
              далее
            </button>
            <div className="steps">
              <div
                className="step"
                style={{
                  color: step === 1 ? "#000" : "#a6a5a5",
                }}
                data-target-step={1}
                onClick={changeStep}
              >
                1
              </div>
              <div
                className="step"
                style={{
                  color: step === 2 ? "#000" : "#a6a5a5",
                }}
                data-target-step={2}
                onClick={changeStep}
              >
                2
              </div>
            </div>
          </div>

          <div
            className="step-2"
            style={{
              display: step === 2 ? "block" : "none",
            }}
          >
            <input
              type="email"
              className="register-email"
              maxLength={40}
              placeholder="E-mail"
              onChange={(c) => {
                this.setState({ email: c.target.value });
              }}
            />
            <input
              type="text"
              className="register-phone"
              minLength={11}
              maxLength={11}
              placeholder="Телефон номер"
              value={this.state.phone}
              onChange={(c) => {
                if (c.target.value.length !== 0) {
                  if (/^\d+$/.test(c.target.value)) {
                    this.setState({
                      phone: c.target.value,
                    });
                  } else {
                    message.warning(
                      "Номер телефона должен быть номером"
                    );
                  }
                } else {
                  this.setState({ phone: c.target.value });
                }
              }}
            />
            <input
              type="password"
              className="register-password"
              minLength={8}
              maxLength={40}
              placeholder="Придумайте пароль"
              onChange={(c) => {
                this.setState({ password: c.target.value });
              }}
            />
            <input
              type="password"
              className="register-password2"
              minLength={8}
              maxLength={40}
              placeholder="Повторите пароль"
              onChange={(c) => {
                this.setState({
                  password2: c.target.value,
                });
              }}
            />
            <div className="to-login">
              <span>Уже есть аккаунт?</span>
              <Link to="/login">Войти</Link>
            </div>
            <button type="submit">
              Зарегистрироваться
            </button>
            <div className="steps">
              <div
                className="step"
                style={{
                  color: step === 1 ? "#000" : "#a6a5a5",
                }}
                data-target-step={1}
                onClick={changeStep}
              >
                1
              </div>
              <div
                className="step"
                style={{
                  color: step === 2 ? "#000" : "#a6a5a5",
                }}
                data-target-step={2}
                onClick={changeStep}
              >
                2
              </div>
            </div>
          </div>
        </form>
      </LoginTemplate>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPage);
