import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import useMakeToast from "../../hooks/Toast";
const Base_URL = process.env.NEXT_PUBLIC_API_URL;
export const loadUserRequest = createAction("LoadUserRequest");
export const loadUserSuccess = createAction("LoadUserSuccess");
export const loadUserFail = createAction("LoadUserFail");
export const loadSellerRequest = createAction("LoadSellerRequest");
export const loadSellerSuccess = createAction("LoadSellerSuccess");
export const loadSellerFail = createAction("LoadSellerFail");
export const clearError = createAction("clearError");

//Loader User
export const loadUser = () => async (dispatch) => {
  const makeToast = useMakeToast();
  try {
    dispatch(loadUserRequest());
    const { data } = await axios.get(`${Base_URL}/user/getuser`, {
      withCredentials: true,
    });
    console.log('loadUser action: data received', data);
    dispatch(loadUserSuccess(data.user));
  } catch (error) {
    // console.log("The Error in redux catch:", error.response.data);
    dispatch(loadUserFail(error.response.data.message));
    makeToast(error.response.data.message, "error");
  }
};

//Loader User
export const loadSeller = () => async (dispatch) => {
  const makeToast = useMakeToast();
  try {
    dispatch(loadSellerRequest());
    const { data } = await axios.get(`${Base_URL}/shop/getseller`, {
      withCredentials: true,
    });
    console.log('loadUser action: data received', data);
    dispatch(loadSellerSuccess(data.user));
  } catch (error) {
    // console.log("The Error in redux catch:", error.response.data);
    dispatch(loadSellerFail(error.response.data.message));
    makeToast(error.response.data.message, "error");
  }
};
