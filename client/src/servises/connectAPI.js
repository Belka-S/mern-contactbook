import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Authorization
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset(token) {
    axios.defaults.headers.common.c = ``;
  },
};

export const register = async credentials => {
  const { data } = await axios.post('/users/signup', credentials);
  token.set(data.token);
  return data;
};

export const refresh = async persistedToken => {
  token.set(persistedToken);
  const { data } = await axios.get('/users/current');
  return data;
};

export const logIn = async credentials => {
  const { data } = await axios.post('/users/login', credentials);
  token.set(data.token);
  return data;
};

export const logOut = async () => {
  const { data } = await axios.post('/users/logout');
  token.unset();
  return data;
};

// Contacts
export const fetchContacts = async () => {
  const resp = await axios.get('/contacts');
  return resp.data;
};

export const addContact = async contact => {
  const resp = await axios.post('/contacts', contact);
  return resp.data;
};

export const deleteContact = async id => {
  const resp = await axios.delete(`/contacts/${id}`);
  return resp.data;
};
