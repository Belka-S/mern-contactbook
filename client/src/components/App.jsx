import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Section } from 'components/Section/Section';
import { Header } from 'layouts/Header/Header';
import { refreshThunk } from 'store/auth/authOperations';
import { useAuth } from 'utils/hooks/useAuth';
import { OvalLoader } from 'components/Loader/OvalLoader';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRote } from './PrivateRoute';

import Home from 'pages/Home';
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <Section>
      {!isRefreshing ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Header />}>
            <Route path="/register" element={restrictedRoute(Register)} />
            <Route path="/login" element={restrictedRoute(Login)} />
            <Route path="/contacts" element={privateRoute(Contacts)} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      ) : (
        <OvalLoader />
      )}
    </Section>
  );
};

const privateRoute = component => (
  <PrivateRote component={component} redirectTo="/login" />
);

const restrictedRoute = component => (
  <RestrictedRoute component={component} redirectTo="/contacts" />
);
