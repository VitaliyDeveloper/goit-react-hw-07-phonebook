// import { createSelector } from '@reduxjs/toolkit';
// import { selectContacts } from '../contacts/contacts-selectors';

export const selectFilter = state => state.filter.filter;

// export const selectVisibleContacts = createSelector(
//   [selectFilter, selectContacts],
//   (filter, contacts) => {
//     contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );
