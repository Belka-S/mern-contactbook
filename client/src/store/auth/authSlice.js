import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import * as OPS from 'store/auth/authOperations';
import { initialState } from './initialState';

const thunkArr = [OPS.registerThunk, OPS.loginThunk, OPS.logoutThunk];
const fn = type => thunkArr.map(el => el[type]);

const handleAuthSucsess = (state, action) => {
  const { _id, name, email, verifiedEmail, accessToken, refreshToken } =
    action.payload.result.user;

  state.user = { ...state.user, accessToken, refreshToken };
  if (_id) state.user._id = _id;
  if (name) state.user.name = name;
  if (email) state.user.email = email;
  if (String(verifiedEmail) === 'true' || 'false') {
    state.user.verifiedEmail = verifiedEmail;
  }
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
      // auth success
      .addCase(OPS.registerThunk.fulfilled, handleAuthSucsess)
      .addCase(OPS.loginThunk.fulfilled, handleAuthSucsess)
      .addCase(OPS.logoutThunk.fulfilled, handleLogoutSucsess)
      // auth from localStorage
      .addCase(OPS.refreshThunk.fulfilled, handleAuthSucsess)
      .addCase(OPS.refreshThunk.pending, handleRefreshPending)
      .addCase(OPS.refreshThunk.rejected, handleRefreshError)
      // pending/reject
      .addMatcher(isAnyOf(...fn('pending')), handlePending)
      .addMatcher(isAnyOf(...fn('rejected')), handleError);
  },
});

export const { authenticate } = authSlice.actions;
export const authReducer = authSlice.reducer;
