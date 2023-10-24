// User
export const selectUser = state => state.auth.user;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectAuthIsLoading = state => state.auth.isLoading;
export const selectAuthError = state => state.auth.error;

// Contacts
export const selectContacts = state => state.contacts.items;

export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectActiveContact = state => state.contacts.activeItem;
export const selectFilterValue = state => state.contacts.filter;
