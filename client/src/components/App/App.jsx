import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Section } from 'components/Section/Section';
import { AppBar } from 'components/AppBar/AppBar';
import { refreshThunk } from 'store/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { OvalLoader } from 'components/Loader/OvalLoader';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRote } from './PrivateRoute';

const Home = lazy(() => import('pages/Home'));
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
          <Route path="/" element={<AppBar />}>
            <Route index element={<Home />} />
            <Route path="/register" element={restrictedRoute(Register)} />
            <Route path="/login" element={restrictedRoute(Login)} />
            <Route path="/contacts" element={privateRoute(Contacts)} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
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
