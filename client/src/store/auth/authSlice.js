import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import * as operations from 'store/auth/authOperations';

const thunkArr = [
  operations.registerThunk,
  operations.loginThunk,
  operations.logoutThunk,
];
const fn = type => thunkArr.map(el => el[type]);

const initialState = {
  user: { username: null, email: null, token: null },

  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(operations.registerThunk.fulfilled, handleAuthSucsess)
      .addCase(operations.loginThunk.fulfilled, handleAuthSucsess)
      .addCase(operations.logoutThunk.fulfilled, handleLogoutSucsess)
      .addCase(operations.refreshThunk.fulfilled, handleRefreshSucsess)
      .addCase(operations.refreshThunk.pending, handleRefreshPending)
      .addCase(operations.refreshThunk.rejected, handleRefreshError)
      .addMatcher(isAnyOf(...fn('pending')), handlePending)
      .addMatcher(isAnyOf(...fn('rejected')), handleError);
  },
});

export const authReducer = authSlice.reducer;

const handleAuthSucsess = (state, action) => {
  const { user } = action.payload.result;

  state.user = user;
  state.isLoggedIn = user.token ? true : false;
  state.error = false;
};

const handleLogoutSucsess = state => {
  return initialState;
};

const handleRefreshSucsess = (state, action) => {
  const { user } = action.payload.result;

  state.user = user;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.error = false;
};

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
