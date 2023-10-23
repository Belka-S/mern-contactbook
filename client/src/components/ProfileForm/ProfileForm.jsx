import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import GridWrap from 'components/shared/GridWrap/GridWrap';
import Button from 'components/shared/Button/Button';
import { useAuth } from 'utils/hooks';
import { deleteThunk } from 'store/auth/authOperations';
import { USER_FIELDS } from 'utils/constants';
import { Avatar, Div } from './ProfileForm.styled';

const ProfileForm = ({ setIsProfileForm }) => {
  const dispatch = useDispatch();
  const user = useAuth();
  const { userName, userAvatarUrl } = useAuth();

  const abbreviation = userName
    .replace('-', ' ')
    .split(/\s+/)
    .reduce((acc, el) => acc + el.at(0).toUpperCase(), '')
    .substring(0, 3);

  return (
    <Div>
      <Avatar style={{ backgroundImage: `url(${userAvatarUrl})` }}>
        {!userAvatarUrl && abbreviation}
      </Avatar>

      <GridWrap cg="20px" rg="0" gtc="1fr 4fr">
        {USER_FIELDS.map(
          el =>
            user[el] && (
              <Fragment key={el}>
                <span>{el.replace('user', '')}:</span>
                <span>
                  {el.includes('Created')
                    ? user[el].substring(0, 10)
                    : user[el]}
                </span>
              </Fragment>
            )
        )}
      </GridWrap>

      <GridWrap mm="40px" cg="3vw" gtc="1fr 1fr 1fr">
        <Button onClick={() => setIsProfileForm(true)}>Edit</Button>
        <Button>Cancel</Button>
      </GridWrap>
    </Div>
  );
};

export default ProfileForm;

ProfileForm.propTypes = { setIsProfileForm: PropTypes.func };
