import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import useMakeToast from "../../hooks/Toast";
const Base_URL = process.env.NEXT_PUBLIC_API_URL;
export const loadUserRequest = createAction("LoadUserRequest");
export const loadUserSuccess = createAction("LoadUserSuccess");
export const loadUserFail = createAction("LoadUserFail");
export const clearError = createAction("clearError");

export const loadUser = () => async (dispatch) => {
  const makeToast = useMakeToast();
  try {
    dispatch(loadUserRequest());
    const { data } = await axios.get(`${Base_URL}/user/getuser`, {
      withCredentials: true,
    });
    dispatch(loadUserSuccess(data.user));
  } catch (error) {
    // console.log("The Error in redux catch:", error.response.data);
    dispatch(loadUserFail(error.response.data.message));
    makeToast(error.response.data.message, "error");
  }
};
