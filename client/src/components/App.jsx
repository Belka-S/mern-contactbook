import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';

import { loadWebFonts } from 'styles/webFonts';
import { refreshThunk } from 'store/auth/authOperations';
import { useAuth } from 'utils/hooks/useAuth';

import Toast from 'components/common/Toast/Toast';
import OvalLoader from 'components/common/Loader/OvalLoader';
import PublicRoutes from 'routes/PublicRoutes';
import PrivateRoutes from 'routes/PrivateRoutes';

import HomePage from 'pages/HomePage';
import GooglePage from 'pages/GooglePage';
const SharedLayuot = lazy(() => import('layouts/SharedLayuot/SharedLayuot'));
const SignupPage = lazy(() => import('pages/SignupPage'));
const SigninPage = lazy(() => import('pages/SigninPage'));
const ResetPage = lazy(() => import('pages/ResetPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const ProfilePage = lazy(() => import('pages/ProfilePage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    loadWebFonts();
  }, []);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing && (
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/google" element={<GooglePage />} />
            <Route path="/reset" element={<ResetPage />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<SharedLayuot />}>
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}

      {isRefreshing && <OvalLoader />}

      <Toast />
    </>
  );
};
