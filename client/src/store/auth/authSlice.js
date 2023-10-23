import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import * as OPS from 'store/auth/authOperations';
import { initialState } from './initialState';

const thunkArr = [
  OPS.registerThunk,
  OPS.loginThunk,
  OPS.logoutThunk,
  OPS.verifyThunk,
  OPS.forgotThunk,
  OPS.resetThunk,
  OPS.deleteThunk,
];
const fn = type => thunkArr.map(el => el[type]);

const handleAuthSucsess = (state, action) => {
  const { accessToken, refreshToken } = action.payload.result.user;

  state.user = { ...state.user, accessToken, refreshToken };
  state.isLoggedIn = Boolean(accessToken);
  state.isRefreshing = false;
  state.error = false;
};

const handleLoginSucsess = (state, action) => {
  const { user } = action.payload.result;

  state.user = { ...user };

  state.isLoggedIn = Boolean(user.accessToken);
  state.isRefreshing = false;
  state.error = false;
};

const handleLogoutSucsess = () => initialState;

const handleRefreshPending = state => {
  state.isRefreshing = true;
  state.error = false;
};

const handleRefreshError = state => {
  state.isRefreshing = false;
  state.error = true;
};

const handlePending = state => {
  state.isLoading = true;
  state.error = false;
};

const handleError = state => {
  state.isLoading = false;
  state.error = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate: handleAuthSucsess,
  },
  extraReducers: builder => {
    builder
      // auth success
      .addCase(OPS.registerThunk.fulfilled, handleLoginSucsess)
      .addCase(OPS.loginThunk.fulfilled, handleLoginSucsess)
      .addCase(OPS.logoutThunk.fulfilled, handleLogoutSucsess)
      .addCase(OPS.verifyThunk.fulfilled, handleLoginSucsess)
      // reset password
      .addCase(OPS.forgotThunk.fulfilled, handleLogoutSucsess)
      .addCase(OPS.resetThunk.fulfilled, handleLogoutSucsess)
      // auth from localStorage
      .addCase(OPS.refreshThunk.fulfilled, handleLoginSucsess)
      .addCase(OPS.refreshThunk.pending, handleRefreshPending)
      .addCase(OPS.refreshThunk.rejected, handleRefreshError)
      // user
      .addCase(OPS.deleteThunk.fulfilled, handleLogoutSucsess)
      // pending/reject
      .addMatcher(isAnyOf(...fn('pending')), handlePending)
      .addMatcher(isAnyOf(...fn('rejected')), handleError);
  },
});

export const { authenticate } = authSlice.actions;
export const authReducer = authSlice.reducer;
