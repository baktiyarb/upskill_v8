import React, { Component } from "react";
import { connect } from "react-redux";

import { deleteUserInfoAction } from "@redux/actions";

import { Layout } from "antd";

import TopNavBar from "@student-components/TopNavBarComponent";
import SideBar from "@student-components/SideBarComponent";

import "./index.less";

const { Content } = Layout;

class NewsPage extends Component {
  jumpPath = (path, mode = "push") => {
    this.props.history[mode](path);
  };

  render() {
    const { jumpPath } = this;
    const { deleteUserInfo } = this.props;
    const { collapsed } = this.props.page;

    return (
      <section className="student-news-page">
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
            className="student-news-page__student-news-page-content"
            style={{
              maxWidth: collapsed ? "100%" : "",
              backgroundColor: "#fff",
            }}
          ></Content>
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
)(NewsPage);
