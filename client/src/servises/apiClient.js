import axios from 'axios';
import toast from 'react-hot-toast';

import { store } from 'store/store';
import { authenticate } from 'store/auth/authSlice';
import { loginThunk } from 'store/auth/authOperations';
import { baseURL } from './baseURL';

// axios instance
const apiClient = axios.create({ baseURL });

// set token
const token = {
  set(token) {
    apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    apiClient.defaults.headers.common.Authorization = ``;
  },
};

// response interseptor
apiClient.interceptors.response.use(
  response => {
    const { message, result } = response.data;

    !result?.contacts && message && toast(message);

    !message &&
      result?.user?.verificationCode === 'google' &&
      toast(`Logged in: ${result.user.email}`);

    return response;
  },
  async error => {
    if (error.response.status === 401) {
      try {
        const { refreshToken } = store.getState().auth.user;
        if (!refreshToken) {
          return Promise.reject(error);
        }
        apiClient.defaults.headers.common['refreshtoken'] = refreshToken;
        error.config.headers.refreshtoken = `${refreshToken}`;

        const { data } = await apiClient.post('/auth/refresh');
        const { accessToken } = data.result.user;

        token.set(accessToken);
        await store.dispatch(authenticate(data));
        error.config.headers.Authorization = `Bearer ${accessToken}`;

        return apiClient(error.config);
      } catch (error) {
        store.dispatch(loginThunk({}));
        console.log('error: ', error);
        return Promise.reject(error);
      }
    }
    toast(error.response.data.message);
    return Promise.reject(error);
  }
);

export { apiClient, token };
