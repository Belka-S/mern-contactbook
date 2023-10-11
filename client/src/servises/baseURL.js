const { REACT_APP_DEV_BACK_URL, REACT_APP_PROD_BACK_URL } = process.env;

export const baseURL =
  process.env.NODE_ENV === 'development'
    ? `${REACT_APP_DEV_BACK_URL}/api`
    : `${REACT_APP_PROD_BACK_URL}/api`;
