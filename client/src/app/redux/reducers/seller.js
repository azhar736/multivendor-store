import { createReducer } from "@reduxjs/toolkit";
import {
  loadSellerRequest,
  loadSellerSuccess,
  loadSellerFail,
  clearError,
} from "../actions/user";

const initialState = {
  isSeller: false,
};

export const sellerReducer = createReducer(initialState, {
  [loadSellerRequest]: (state) => {
    state.isLoading = true;
  },
  [loadSellerSuccess]: (state, action) => {
    console.log("userReducer: loadUserSuccess action received", action);
    state.isSeller = true;
    state.isLoading = false;
    state.seller = action.payload;
  },
  [loadSellerFail]: (state, action) => {
    state.isSeller = false;
    state.isLoading = false;
    state.error = action.payload;
  },
  [clearError]: (state, action) => {
    state.error = null;
  },
});
