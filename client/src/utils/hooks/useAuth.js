import { useSelector } from 'react-redux';
import * as selectors from 'store/seletors';

export const useAuth = () => {
  const userId = useSelector(selectors.selectUserId);
  const userName = useSelector(selectors.selectUserName);
  const userEmail = useSelector(selectors.selectUserEmail);
  const userVerifiedEmail = useSelector(selectors.selectUserVerifiedEmail);

  const userAvatarUrl = useSelector(selectors.selectUserAvatarUrl);
  const userLocation = useSelector(selectors.selectUserLocation);
  const userSocialLink = useSelector(selectors.selectUserSocialLink);
  const userWhatsApp = useSelector(selectors.selectUserWhatsApp);
  const userTelegram = useSelector(selectors.selectUserTelegram);
  const userBirthday = useSelector(selectors.selectUserBirthday);
  const userAbout = useSelector(selectors.selectUserAbout);
  const userCreatedAt = useSelector(selectors.selectUserCreatedAt);

  const isLoggedIn = useSelector(selectors.selectIsLoggedIn);
  const isRefreshing = useSelector(selectors.selectIsRefreshing);
  const isLoading = useSelector(selectors.selectAuthIsLoading);
  const error = useSelector(selectors.selectAuthError);

  return {
    userId,
    userName,
    userEmail,
    userVerifiedEmail,

    userAvatarUrl,
    userWhatsApp,
    userTelegram,
    userLocation,
    userSocialLink,
    userBirthday,
    userAbout,
    userCreatedAt,

    isLoggedIn,
    isRefreshing,
    isLoading,
    error,
  };
};
