import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import GridWrap from 'components/shared/GridWrap/GridWrap';
import Button from 'components/shared/Button/Button';
import { useAuth, useAbbreviation } from 'utils/hooks';
import { deleteUserThunk } from 'store/auth/authOperations';
import { USER_CREDENTIALS } from 'utils/constants';
import { Div, Wrapper, Avatar } from './ProfileCard.styled';

const ProfileCard = ({ setIsProfileForm }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const abbreviation = useAbbreviation(user.name);

  const handleDeleteProfile = () => {
    const del = window.confirm('Do you want to delete your profile and data?');
    del && dispatch(deleteUserThunk());
  };

  return (
    <Div>
      <Avatar url={user.avatarUrl} abbr={user.avatarUrl ? '' : abbreviation} />

      {USER_CREDENTIALS.map(
        el =>
          user[el] && (
            <Wrapper key={el}>
              <span>{el}:</span>
              <span>{user[el]}</span>
            </Wrapper>
          )
      )}

      <GridWrap mm="40px" cg="3vw" gtc="1fr 1fr 1fr">
        <Button onClick={() => setIsProfileForm(true)}>Edit</Button>
        <div></div>
        <Button onClick={handleDeleteProfile}>Delete</Button>
      </GridWrap>
    </Div>
  );
};

export default ProfileCard;

ProfileCard.propTypes = { setIsProfileForm: PropTypes.func };
