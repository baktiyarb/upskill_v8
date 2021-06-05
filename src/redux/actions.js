import {
  UPDATE_USER_INFO,
  DELETE_USER_INFO,
  CHANGE_SIDE_BAR_COLLAPSED,
  CHANGE_FULL_SCREEN_LOADING,
} from "@redux/action-types";
import { localStorage } from "@utils";

export const updateUserInfoAction = (userObj) => ({
  type: UPDATE_USER_INFO,
  data: userObj,
});

export const deleteUserInfoAction = () => {
  localStorage.remove("user");
  localStorage.remove("page");

  return {
    type: DELETE_USER_INFO,
    data: undefined,
  };
};

export const changeSideBarCollapsed = (collapsed) => {
  localStorage.set(
    "page",
    Object.assign(
      {},
      localStorage.get("page", {
        collapsed: false,
        isLoading: false,
      }),
      collapsed
    )
  );

  return {
    type: CHANGE_SIDE_BAR_COLLAPSED,
    data: collapsed,
  };
};

export const changeFullScreenLoadingAction = (
  isLoading
) => ({
  type: CHANGE_FULL_SCREEN_LOADING,
  data: isLoading,
});
