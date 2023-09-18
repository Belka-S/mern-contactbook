import { createAsyncThunk } from '@reduxjs/toolkit';
import * as connectAPI from 'servises/connectAPI';

export const fetchContactsThunk = createAsyncThunk(
  'items/fetchContacts',
  async (_, thunkAPI) => {
    try {
      return await connectAPI.fetchContacts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'items/addContact',
  async (contact, thunkAPI) => {
    try {
      return await connectAPI.addContact(contact);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'items/deleteContact',
  async (id, thunkAPI) => {
    try {
      return await connectAPI.deleteContact(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
