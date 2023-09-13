import { useAuth } from 'utils/hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  const { state } = useLocation();

  return isLoggedIn ? (
    <Navigate to={state ? state : redirectTo} />
  ) : (
    <Component />
  );
};
