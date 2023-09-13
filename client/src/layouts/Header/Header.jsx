import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { StyledHeader, NavLink, Div } from './Header.styled';
import { logoutThunk } from 'store/auth/authOperations';
import { useAuth } from 'utils/hooks/useAuth';
import { OvalLoader } from 'components/Loader/OvalLoader';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <StyledHeader>
        <MainNav />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </StyledHeader>

      <Suspense fallback={<OvalLoader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

const MainNav = () => (
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/contacts">Contacts</NavLink>
  </nav>
);

const AuthNav = () => (
  <nav>
    <NavLink to="/register">Register</NavLink>
    <NavLink to="/login">Log in</NavLink>
  </nav>
);

const UserMenu = () => {
  const dispatch = useDispatch();
  const { userName } = useAuth();

  return (
    <Div>
      <p>{userName}</p>
      <button onClick={() => dispatch(logoutThunk())}>Log out</button>
    </Div>
  );
};
