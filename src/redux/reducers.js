import { combineReducers } from "redux";
import { localStorage } from "@utils";

import {
  UPDATE_USER_INFO,
  DELETE_USER_INFO,
  CHANGE_SIDE_BAR_COLLAPSED,
  CHANGE_FULL_SCREEN_LOADING,
} from "@redux/action-types";

const userInitState = localStorage.get("user", {
  id: undefined,
  email: "",
  firstName: "",
  lastName: "",
  username: "",
  userType: "guest",
  accepted: undefined,
  jwt: "",
  refreshJWT: "",
});

function user(preState = userInitState, action) {
  const { data, type } = action;

  switch (type) {
    case UPDATE_USER_INFO:
      return Object.assign({}, preState, data);
    case DELETE_USER_INFO:
      return {
        id: undefined,
        email: "",
        firstName: "",
        lastName: "",
        username: "",
        userType: "guest",
        accepted: undefined,
        jwt: "",
        refreshJWT: "",
      };

    default:
      return preState;
  }
}

const pageInitState = localStorage.get("page", {
  collapsed: false,
  isLoading: false,
});
function page(preState = pageInitState, action) {
  const { type, data } = action;

  switch (type) {
    case CHANGE_SIDE_BAR_COLLAPSED:
      return Object.assign({}, preState, {
        collapsed: data,
      });
    case CHANGE_FULL_SCREEN_LOADING:
      return Object.assign({}, preState, {
        isLoading: data,
      });
    default:
      return preState;
  }
}

// Сыртқа әшкерелеген(export) state құрылымы: { reducerFunction: state }
export default combineReducers({ user, page });
