import { useSelector } from 'react-redux';
import * as selectors from 'store/seletors';

export const useAuth = () => {
  const userId = useSelector(selectors.selectUserId);
  const userName = useSelector(selectors.selectUserName);
  const userEmail = useSelector(selectors.selectUserEmail);
  const userVerifiedEmail = useSelector(selectors.selectUserVerifiedEmail);

  const isLoggedIn = useSelector(selectors.selectIsLoggedIn);
  const isRefreshing = useSelector(selectors.selectIsRefreshing);
  const isLoading = useSelector(selectors.selectAuthIsLoading);
  const error = useSelector(selectors.selectAuthError);

  return {
    userId,
    userName,
    userEmail,
    userVerifiedEmail,

    isLoggedIn,
    isRefreshing,
    isLoading,
    error,
  };
};
