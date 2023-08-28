import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE } from 'redux-persist';
import { PERSIST, PURGE, REGISTER } from 'redux-persist';

import { contactsReducer } from './Contacts/contactsSlice';
import { filterReducer } from './Contacts/filterSlice';
import { authReducer } from './Auth/authSlice';

// ----------------persistReducer---------------- //

const rootPersistConfig = {
  key: 'phoneBook',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  auth: persistReducer(rootPersistConfig, authReducer),
  contacts: contactsReducer,
  filter: filterReducer,
});

// ----------------configureStore---------------- //

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// -----------------persistStore----------------- //

export const persistor = persistStore(store);
