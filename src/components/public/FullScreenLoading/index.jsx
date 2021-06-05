import React, { Component } from "react";

import "./index.less";

export default class FulScreenLoading extends Component {
  render() {
    let { isLoading } = this.props;

    return (
      <div
        className="full-screen-loading"
        style={{
          opacity: isLoading ? ".6" : "0",
          pointerEvents: isLoading ? "auto" : "none",
        }}
      >
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}
