import React, { Component } from "react";
import { connect } from "react-redux";

import { Collapse } from 'antd'
import Icon from '@ant-design/icons';
import { CaretRightOutlined } from '@ant-design/icons';

import shortid from "shortid";

import { deleteUserInfoAction } from "@redux/actions";

import { Layout } from "antd";

import TopNavBar from "@student-components/TopNavBarComponent";
import SideBar from "@student-components/SideBarComponent";

import "./index.less";
import { NavLink } from "react-router-dom";

const { Content } = Layout;
const { Panel } = Collapse;

const ArrowSVG = () => (
  <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L9.32642 10L17.1762 2" stroke="#656678" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

const ActiveArrowSVG = () => (
  <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.1763 10L9.84985 2L2.00012 10" stroke="#656678" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

const ActiveArrowIcon = props => <Icon component={ActiveArrowSVG} {...props} />;
const ArrowIcon = props => <Icon component={ArrowSVG} {...props} />;

class CoursePage extends Component {
  state = {
    courses: [
      {title: "Python", groups: [{to: '/', title: 'Первая группа'},{to: '/', title: 'Вторая группа'},{to: '/', title: 'Третья группа'}, ]},
      {title: "Java Script", groups: [{to: '/', title: 'Первая группа'},{to: '/', title: 'Вторая группа'},{to: '/', title: 'Третья группа'}, ]}
    ],
  };

  jumpPath = (path, mode = "push") => {
    this.props.history[mode](path);
  };

  spoilerHandler = () => {
    this.setState({spoiler: !this.state.spoiler})
  } 

  render() {
    const { jumpPath } = this;

    const { deleteUserInfo } = this.props;
    const { collapsed } = this.props.page;

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
            <div className="page-content">
              <h1 className="course-header">Курсы</h1>
              <Collapse className="course-wrap" expandIconPosition='right' expandIcon={({ isActive }) => isActive ? <ActiveArrowIcon /> : <ArrowIcon/>}>
                { this.state.courses.map((item, index) => (
                  <Panel header={item.title} showArrow={true} className='course-item' key={ index } >
                    <div className="content">
                      {
                        item.groups.map((item, index) => (
                          <NavLink className="groups" key={index} to={item.to}>
                            {item.title}
                          </NavLink>
                        ))
                      }
                    </div>
                  </Panel>
                )) }
              </Collapse>
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
