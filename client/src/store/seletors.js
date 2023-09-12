export const selectContacts = state => state.contacts.items;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;

export const selectFilterValue = state => state.filter;

export const selectUserName = state => state.auth.user.name;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectAuthError = state => state.auth.error;
export const selectAuthIsLoading = state => state.auth.isLoading;
export const selectToken = state => state.auth.token;
