import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom";

import { routeConfig } from "@config";
import { localStorage } from "@utils";
import { useBeforeunload, useAntdLocale } from "@hooks";

import { ConfigProvider as AntdConfigProvider } from "antd";
import FilterRoute from "@public-components/FilterRoute";
import FullScreenLoading from "@public-components/FullScreenLoading";

import "@assets/less/normalize.less";
import "@assets/less/antd.less";
import "./App.less";

const App = ({
  user,
  page,
  user: { jwt, userType, accepted },
  page: { isLoading },
}) => {
  useBeforeunload({ user, page });

  return (
    <AntdConfigProvider locale={useAntdLocale("ru-RU")}>
      <BrowserRouter>
        <Switch>
          <FilterRoute
            config={routeConfig}
            userType={userType}
            jwt={jwt}
            accepted={accepted}
          />
        </Switch>
      </BrowserRouter>

      <FullScreenLoading isLoading={isLoading} />
    </AntdConfigProvider>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
