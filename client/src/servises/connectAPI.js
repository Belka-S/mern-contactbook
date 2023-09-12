import axios from 'axios';

const { REACT_APP_BACK_URL_DEV } = process.env;

axios.defaults.baseURL = `${REACT_APP_BACK_URL_DEV}/api`;

// Authorization
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset(token) {
    axios.defaults.headers.common.Authorization = ``;
  },
};

export const register = async credentials => {
  const { data } = await axios.post('/auth/register', credentials);
  token.set(data.token);
  return data;
};

export const logIn = async credentials => {
  const { data } = await axios.post('/auth/login', credentials);
  token.set(data.token);
  return data;
};

export const logOut = async () => {
  const { data } = await axios.post('/auth/logout');
  token.unset();
  return data;
};

export const refresh = async persistedToken => {
  token.set(persistedToken);
  const { data } = await axios.get('/users/current');
  return data;
};

// Contacts
export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addContact = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
