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

// Auth to DELETE
export const selectUserId = state => state.auth.user._id;
export const selectUserName = state => state.auth.user.name;
export const selectUserEmail = state => state.auth.user.email;
export const selectUserVerifiedEmail = state => state.auth.user.verifiedEmail;

export const selectUserAvatarUrl = state => state.auth.user.avatarUrl;
export const selectUserLocation = state => state.auth.user.location;
export const selectUserSocialLink = state => state.auth.user.socialLink;
export const selectUserWhatsApp = state => state.auth.user.whatsApp;
export const selectUserTelegram = state => state.auth.user.telegram;
export const selectUserBirthday = state => state.auth.user.birthday;
export const selectUserAbout = state => state.auth.user.about;
export const selectUserCreatedAt = state => state.auth.user.createdAt;
