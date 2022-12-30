// import { createStore, combineReducers } from 'redux';
// import { contactsReducer } from './contacts/contacts-reducers';

// const rootReducer = combineReducers({ contacts: contactsReducer });

// export const store = createStore(rootReducer);

import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
