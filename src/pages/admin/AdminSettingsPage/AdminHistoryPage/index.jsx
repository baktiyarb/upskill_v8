import React, {Component} from 'react';

import { Layout, message } from "antd";

import SideBar from '@student-components/SideBarComponent';
import TopNavBar from '@student-components/TopNavBarComponent';
import SettingPagesRightSideBar from '@teacher-components/SettingPagesRightSideBar';

const { Content } = Layout;

class AdminHistoryPage extends Component {
  jumpPath = (path, mode = "push") => {
    this.props.history[mode](path);
  };

  render(){
    const { jumpPath } = this;
    const { deleteUserInfo } = this.props;
    // const { collapsed } = this.props.page;
    const { pathname: currentPath } = this.props.location;
    
    return(
      <section className="admin-calendar-page">
        <SideBar
          currentPath={currentPath}
          jumpPath={jumpPath}
        />
        <Layout>
          <TopNavBar
            jumpPath={jumpPath}
            logout={deleteUserInfo}
          />
          <Content>
          
            <SettingPagesRightSideBar />
          </Content>
        </Layout>
      </section>
    )
  }
}

export default AdminHistoryPage;