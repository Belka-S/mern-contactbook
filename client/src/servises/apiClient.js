import axios from 'axios';

import { store } from 'store/store';
import { authenticate } from 'store/auth/authSlice';
import { logoutThunk } from 'store/auth/authOperations';
import { notify } from 'components/common/Toast/Toast';

const { REACT_APP_BACK_URL_DEV, REACT_APP_BACK_URL_PROD } = process.env;

// axios instance
const apiClient = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? `${REACT_APP_BACK_URL_DEV}/api`
      : `${REACT_APP_BACK_URL_PROD}/api`,
});

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
    !result?.contacts && message && notify(message);

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
        const { user } = data.result;

        token.set(user.token);
        await store.dispatch(authenticate(data));
        error.config.headers.Authorization = `Bearer ${user.token}`;

        return apiClient(error.config);
      } catch (error) {
        store.dispatch(logoutThunk());
        return Promise.reject(error);
      }
    }

    notify(error.response.data.message);
    return Promise.reject(error);
  }
);

export { apiClient, token };
