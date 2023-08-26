import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE } from 'redux-persist';
import { PERSIST, PURGE, REGISTER } from 'redux-persist';

import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

// ----------------persistReducer---------------- //

const rootPersistConfig = {
  key: 'phoneBook',
  storage,
  blacklist: ['contacts'],
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistedRootReducer = persistReducer(rootPersistConfig, rootReducer);

// ----------------configureStore---------------- //

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// -----------------persistStore----------------- //

export const persistor = persistStore(store);
