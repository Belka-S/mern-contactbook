import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { StyledHeader, NavLink, Div } from './Header.styled';
import { logoutThunk } from 'store/auth/authOperations';
import { cleanContactsThunk } from 'store/contacts/contactsOperations';
import { useAuth } from 'utils/hooks/useAuth';
import { OvalLoader } from 'components/Loader/OvalLoader';

export const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, userEmail } = useAuth();

  const handleLogOut = () => {
    dispatch(logoutThunk());
    dispatch(cleanContactsThunk());
  };

  return (
    <>
      <StyledHeader>
        <nav>
          <NavLink to="/contacts">Contacts</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </nav>
        {isLoggedIn && (
          <Div>
            <p>{userEmail}</p>
            <button onClick={handleLogOut}>Log out</button>
          </Div>
        )}
      </StyledHeader>

      <Suspense fallback={<OvalLoader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
