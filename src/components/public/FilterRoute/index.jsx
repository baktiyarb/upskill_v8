import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function FilterRoute(props) {
  const { config, location, jwt, userType, accepted } =
    props;
  const { pathname: targetPath } = location;

  const targetRouteConfig = config.find(
    (routeConfig) => routeConfig.path === targetPath
  );

  if (targetRouteConfig) {
    if (
      targetRouteConfig.auth.includes(Boolean(jwt)) &&
      targetRouteConfig.permission.includes(userType) &&
      targetRouteConfig.accepted.includes(Boolean(accepted))
    ) {
      return (
        <Route
          path={targetPath}
          component={targetRouteConfig.page}
        />
      );
    } else {
      if (!targetRouteConfig.auth.includes(Boolean(jwt))) {
        return <Redirect to="/login" />;
      } else if (
        !targetRouteConfig.permission.includes(userType)
      ) {
        return <Redirect to="/404" />;
      } else if (
        !targetRouteConfig.accepted.includes(
          Boolean(accepted)
        ) &&
        targetRouteConfig.permission.includes(userType) &&
        targetRouteConfig.auth.includes(Boolean(jwt))
      ) {
        return <Redirect to="setting_profile" />;
      } else {
        if (
          targetPath === "/login" ||
          targetPath === "/register"
        ) {
          return <Redirect to="/" />;
        } else {
          return <Redirect to="/404" />;
        }
      }
    }
  } else {
    if (targetPath === "/") {
      switch (userType) {
        case "guest":
          return <Redirect to="/login" />;
        case "ST":
          return <Redirect to="/course" />;
        case "TC":
          return <Redirect to="/teacher" />;
        case "AD":
          return <Redirect to="/admin" />;
        default:
          return <Redirect to="/login" />;
      }
    }

    return <Redirect to="/404" />;
  }
}
