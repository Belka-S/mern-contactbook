import { combineReducers, createSlice, isAnyOf } from '@reduxjs/toolkit';
import * as operations from './contactsOperations';

const thunkArr = [
  operations.fetchContactsThunk,
  operations.cleanContactsThunk,
  operations.addContactThunk,
  operations.deleteContactThunk,
];
const fn = type => thunkArr.map(el => el[type]);

// contacts
const handleFetchContacts = (_, action) => {
  return action.payload.result.contacts;
};
const handleCleanContacts = (_, action) => {
  return action.payload;
};
const handleAddContact = (state, action) => {
  state.push(action.payload.result.contact);
};
const handleDeleteContact = (state, action) => {
  return state.filter(el => el._id !== action.payload.result.contact._id);
};

// fulfilled slice
const contactsItemsSlice = createSlice({
  name: 'items',
  initialState: [],
  extraReducers: builder => {
    builder
      .addCase(operations.fetchContactsThunk.fulfilled, handleFetchContacts)
      .addCase(operations.cleanContactsThunk.fulfilled, handleCleanContacts)
      .addCase(operations.addContactThunk.fulfilled, handleAddContact)
      .addCase(operations.deleteContactThunk.fulfilled, handleDeleteContact);
  },
});

// loading slice
const contactsIsLoadingSlice = createSlice({
  name: 'isLoading',
  initialState: false,
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(...fn('pending')), state => true)
      .addMatcher(isAnyOf(...fn('fulfilled')), state => false)
      .addMatcher(isAnyOf(...fn('rejected')), state => false);
  },
});

// error slice
const contactsErrorSlice = createSlice({
  name: 'error',
  initialState: null,
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(...fn('pending')), state => null)
      .addMatcher(isAnyOf(...fn('fulfilled')), state => null)
      .addMatcher(isAnyOf(...fn('rejected')), (_, action) => action.payload);
  },
});

export const contactsReducer = combineReducers({
  items: contactsItemsSlice.reducer,
  isLoading: contactsIsLoadingSlice.reducer,
  error: contactsErrorSlice.reducer,
});
