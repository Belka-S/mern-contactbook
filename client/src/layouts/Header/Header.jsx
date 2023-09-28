import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { StyledHeader, NavLink, Div } from './Header.styled';
import { logoutThunk } from 'store/auth/authOperations';
import {
  cleanContacts,
  setActiveContact,
  setFilterValue,
} from 'store/contacts/contactsSlice';
import { useAuth } from 'utils/hooks/useAuth';
import OvalLoader from 'components/common/Loader/OvalLoader';
import Button from 'components/common/Button/Button';

export const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, userEmail } = useAuth();

  const handleLogOut = () => {
    dispatch(logoutThunk());
    dispatch(cleanContacts());
    dispatch(setActiveContact(null));
    dispatch(setFilterValue(''));
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
            <Button onClick={handleLogOut}>Log out</Button>
          </Div>
        )}
      </StyledHeader>

      <Suspense fallback={<OvalLoader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
