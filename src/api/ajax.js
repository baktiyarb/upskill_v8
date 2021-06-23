import axios from "axios";

import reduxStore from "@redux/store";

import { message } from "antd";

export const upSkillApiInstance = axios.create({
  baseURL: "https://upskill-test.herokuapp.com",
});


upSkillApiInstance.interceptors.request.use((config) => {
  const state = reduxStore.getState();

  config.headers["Authorization"] = state.user.jwt
    ? "Bearer " + state.user.jwt
    : "";

  return config;
});


upSkillApiInstance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    if (axios.isCancel(err)) {
      // Promise тізбегін үзу
      return new Promise(() => {});
    } else {
      if (
        err.response.status >= 504 &&
        err.response.status < 600
      ) {
        message.error(
          "Сервер не работает, повторите попытку позже"
        );
        // Promise тізбегін үзу
        return new Promise(() => {});
      }
      
      return Promise.reject(err.response.data);
    }
  }
);
