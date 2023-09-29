import { combineReducers, createSlice, isAnyOf } from '@reduxjs/toolkit';
import * as operations from './contactsOperations';

const thunkArr = [
  operations.fetchContactsThunk,
  operations.addContactThunk,
  operations.updateContactThunk,
  operations.deleteContactThunk,
];
const fn = type => thunkArr.map(el => el[type]);

// contacts
const handleFetchContacts = (_, action) => {
  return action.payload.result.contacts;
};
const handleAddContact = (state, action) => {
  state.unshift(action.payload.result.contact);
};
const handleUpdateContact = (state, action) => {
  const { contact } = action.payload.result;
  const index = state.findIndex(el => el._id === contact._id);
  state.splice(index, 1, contact);
};
const handleDeleteContact = (state, action) => {
  const { contact } = action.payload.result;
  return state.filter(el => el._id !== contact._id);
};

// fulfilled slice
const contactsItemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    cleanContacts: state => [],
  },
  extraReducers: builder => {
    builder
      .addCase(operations.fetchContactsThunk.fulfilled, handleFetchContacts)
      .addCase(operations.addContactThunk.fulfilled, handleAddContact)
      .addCase(operations.updateContactThunk.fulfilled, handleUpdateContact)
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

// filter slice
const contactsFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilterValue: (_, action) => action.payload,
  },
});

// active contact slice
const contactsActiveItemSlice = createSlice({
  name: 'active',
  initialState: null,
  reducers: {
    setActiveContact: (_, action) => action.payload,
  },
});

export const contactsReducer = combineReducers({
  items: contactsItemsSlice.reducer,
  isLoading: contactsIsLoadingSlice.reducer,
  error: contactsErrorSlice.reducer,
  filter: contactsFilterSlice.reducer,
  activeItem: contactsActiveItemSlice.reducer,
});

export const { cleanContacts } = contactsItemsSlice.actions;
export const { setActiveContact } = contactsActiveItemSlice.actions;
export const { setFilterValue } = contactsFilterSlice.actions;
