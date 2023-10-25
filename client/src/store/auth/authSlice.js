import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import * as OPS from 'store/auth/authOperations';
import { initialState } from './initialState';

const thunkArr = [
  OPS.registerThunk,
  OPS.loginThunk,
  OPS.logoutThunk,
  OPS.verifyEmailThunk,
  OPS.forgotPassThunk,
  OPS.resetPassThunk,
  OPS.updateUserThunk,
  OPS.deleteUserThunk,
];
const fn = type => thunkArr.map(el => el[type]);

const handleLoginSucsess = (state, action) => {
  const { user } = action.payload.result;

  state.user = { ...user };

  state.isLoggedIn = Boolean(user.accessToken);
  state.isRefreshing = false;
  state.error = false;
};

const handleAuthSucsess = (state, action) => {
  const { accessToken, refreshToken } = action.payload.result.user;

  state.user = { ...state.user, accessToken, refreshToken };
  state.isLoggedIn = Boolean(accessToken);
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
      // auth
      .addCase(OPS.registerThunk.fulfilled, handleLoginSucsess)
      .addCase(OPS.loginThunk.fulfilled, handleLoginSucsess)
      .addCase(OPS.logoutThunk.fulfilled, handleLogoutSucsess)
      // verify email
      .addCase(OPS.verifyEmailThunk.fulfilled, handleLoginSucsess)
      // reset password
      .addCase(OPS.forgotPassThunk.fulfilled, handleLogoutSucsess)
      .addCase(OPS.resetPassThunk.fulfilled, handleLogoutSucsess)
      // auth from localStorage
      .addCase(OPS.refreshUserThunk.fulfilled, handleLoginSucsess)
      .addCase(OPS.refreshUserThunk.pending, handleRefreshPending)
      .addCase(OPS.refreshUserThunk.rejected, handleRefreshError)
      // user
      .addCase(OPS.updateUserThunk.fulfilled, handleLoginSucsess)
      .addCase(OPS.deleteUserThunk.fulfilled, handleLogoutSucsess)
      // pending/reject
      .addMatcher(isAnyOf(...fn('pending')), handlePending)
      .addMatcher(isAnyOf(...fn('rejected')), handleError);
  },
});

export const { authenticate } = authSlice.actions;
export const authReducer = authSlice.reducer;
