import { useSelector } from 'react-redux';
import * as selectors from 'store/seletors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectors.selectIsLoggedIn);
  const isRefreshing = useSelector(selectors.selectIsRefreshing);
  const userId = useSelector(selectors.selectUserId);
  const userName = useSelector(selectors.selectUserName);
  const userEmail = useSelector(selectors.selectUserEmail);
  const error = useSelector(selectors.selectAuthError);
  const isLoading = useSelector(selectors.selectAuthIsLoading);

  return {
    isLoggedIn,
    isRefreshing,
    userId,
    userName,
    userEmail,
    error,
    isLoading,
  };
};
