import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import * as operations from 'store/auth/authOperations';

const thunkArr = [
  operations.registerThunk,
  operations.loginThunk,
  operations.logoutThunk,
];
const fn = type => thunkArr.map(el => el[type]);

const initialState = {
  user: { id: null, name: null, email: null, token: null, refreshToken: null },

  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: false,
};

const handleAuthSucsess = (state, action) => {
  const { _id, name, email, token, refreshToken } = action.payload.result.user;

  state.user = { token, refreshToken };
  if (_id) state.user._id = _id;
  if (name) state.user.name = name;
  if (email) state.user.email = email;
  state.isLoggedIn = Boolean(token);
  state.isRefreshing = false;
  state.error = false;
};

const handleLogoutSucsess = state => initialState;

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
      .addCase(operations.registerThunk.fulfilled, handleAuthSucsess)
      .addCase(operations.loginThunk.fulfilled, handleAuthSucsess)
      .addCase(operations.logoutThunk.fulfilled, handleLogoutSucsess)
      // auth from localStorage
      .addCase(operations.refreshThunk.fulfilled, handleAuthSucsess)
      .addCase(operations.refreshThunk.pending, handleRefreshPending)
      .addCase(operations.refreshThunk.rejected, handleRefreshError)
      // pending/reject
      .addMatcher(isAnyOf(...fn('pending')), handlePending)
      .addMatcher(isAnyOf(...fn('rejected')), handleError);
  },
});

export const { authenticate } = authSlice.actions;
export const authReducer = authSlice.reducer;
