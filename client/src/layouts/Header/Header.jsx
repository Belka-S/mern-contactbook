import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { StyledHeader, NavLink, Div } from './Header.styled';
import { logoutThunk } from 'store/auth/authOperations';
import { cleanContacts, setActiveContact } from 'store/contacts/contactsSlice';
import { setFilterValue } from 'store/contacts/contactsSlice';
import { useAuth } from 'utils/hooks/useAuth';
import OvalLoader from 'components/shared/Loader/OvalLoader';
import Button from 'components/shared/Button/Button';

const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useAuth();

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
            <p>{user.email}</p>
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

export default Header;
