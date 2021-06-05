import React, { Component } from "react";

import { Row, Col } from "antd";

import "./index.less";

export default class LoginTemplate extends Component {
  render() {
    const { className, pageTitle, children } = this.props;

    return (
      <div className={`login-template ${className}`}>
        <Row className="login-wrapper">
          <Col
            className="login-box"
            xs={24}
            sm={24}
            md={12}
            lg={12}
          >
            <div className="login-form-wrapper">
              <h1 className="page-title">{pageTitle}</h1>
              {children}
            </div>
          </Col>
          <Col
            className="logo"
            xs={0}
            sm={0}
            md={12}
            lg={12}
          >
            <svg
              width="337"
              height="304"
              viewBox="0 0 337 304"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M142.036 0C113.632 3.03214 86.313 10.9645 61.8463 23.284C37.3795 35.6035 16.3099 52.0359 0 71.5182L49.1634 122.566C52.8507 71.7725 83.7315 31.023 142.036 0.127143V0ZM194.964 0.381431C223.356 3.39847 250.667 11.3112 275.133 23.6084C299.599 35.9056 320.675 52.3137 337 71.7725L287.837 122.821C284.226 72.0268 253.345 31.1502 195.041 0.381431H194.964Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 71.4546V163.634L168.385 304L336.923 163.57V71.4546L168.385 212.33L0 71.4546Z"
                fill="white"
              />
            </svg>
          </Col>
        </Row>
      </div>
    );
  }
}
