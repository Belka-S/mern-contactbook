import { apiClient, token } from './apiClient';

// Auth
export const register = async credentials => {
  const { data } = await apiClient.post('/auth/register', credentials);
  token.set(data.result.user.accessToken);
  return data;
};

export const login = async credentials => {
  const { data } = await apiClient.post('/auth/login', credentials);
  token.set(data.result.user.accessToken);
  return data;
};

export const logout = async () => {
  const { data } = await apiClient.post('/auth/logout');
  token.unset();
  return data;
};

export const refreshUser = async persistedToken => {
  token.set(persistedToken);
  const { data } = await apiClient.get('/auth/current');
  return data;
};

// Contacts
export const fetchContacts = async () => {
  const { data } = await apiClient.get('/contacts');
  return data;
};

export const addContact = async contact => {
  const { data } = await apiClient.post('/contacts', contact);
  return data;
};

export const updateContact = async ({ id, contact }) => {
  const { data } = await apiClient.put(`/contacts/${id}`, contact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await apiClient.delete(`/contacts/${id}`);
  return data;
};
