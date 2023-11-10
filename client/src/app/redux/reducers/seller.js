import { createReducer } from "@reduxjs/toolkit";
import {
  loadSellerRequest,
  loadSellerSuccess,
  loadSellerFail,
  clearError,
} from "../actions/user";

const initialState = {
  isAuthenticated: false,
};

export const sellerReducer = createReducer(initialState, {
  [loadSellerRequest]: (state) => {
    state.loading = true;
  },
  [loadSellerSuccess]: (state, action) => {
    console.log("userReducer: loadUserSuccess action received", action);
    state.isAuthenticated = true;
    state.loading = false;
    state.user = action.payload;
  },
  [loadSellerFail]: (state, action) => {
    state.isAuthenticated = false;
    state.loading = false;
    state.error = action.payload;
  },
  [clearError]: (state, action) => {
    state.error = null;
  },
});
