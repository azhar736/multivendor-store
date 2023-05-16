import { createReducer } from "@reduxjs/toolkit";
import {
  loadUserRequest,
  loadUserSuccess,
  loadUserFail,
  clearError,
} from "../actions/user";

const initialState = {
  isAuthenticated: false,
};

export const userReducer = createReducer(initialState, {
  [loadUserRequest]: (state) => {
    state.loading = true;
  },
  [loadUserSuccess]: (state, action) => {
    state.isAuthenticated = true;
    state.loading = false;
    state.user = action.payload;
  },
  [loadUserFail]: (state, action) => {
    state.isAuthenticated = false;
    state.loading = false;
    state.error = action.payload;
  },
  [clearError]: (state, action) => {
    state.error = null;
  },
});
