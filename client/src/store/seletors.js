export const selectContacts = state => state.contacts.items;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectActiveContact = state => state.contacts.activeItem;
export const selectFilterValue = state => state.contacts.filter;

export const selectUserId = state => state.auth.user._id;
export const selectUserName = state => state.auth.user.name;
export const selectUserEmail = state => state.auth.user.email;
export const selectToken = state => state.auth.user.token;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectAuthError = state => state.auth.error;
export const selectAuthIsLoading = state => state.auth.isLoading;
