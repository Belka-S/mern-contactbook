import { Suspense } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useAuth } from 'utils/hooks/useAuth';
import OvalLoader from 'components/common/Loader/OvalLoader';

const PublicRoutes = () => {
  const { state } = useLocation();
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? (
    <Suspense fallback={<OvalLoader />}>
      <Outlet />
    </Suspense>
  ) : (
    <Navigate to={state ? state : '/contacts'} />
  );
};

export default PublicRoutes;