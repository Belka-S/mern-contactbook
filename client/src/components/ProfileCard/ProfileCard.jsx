import GridWrap from 'components/shared/GridWrap/GridWrap';
import Button from 'components/shared/Button/Button';
import { Div } from './ProfileCard.styled';

import { useAuth } from 'utils/hooks';
import { USER_FIELDS } from 'utils/constants';
import { Fragment } from 'react';

const ProfileCard = () => {
  const user = useAuth();
  console.log('user: ', user);

  return (
    <Div>
      <img src={user.userAvatarUrl} alt="user-avatar" />

      {USER_FIELDS.map(el => (
        <GridWrap key={el} cg="20px" gtc="1fr 5fr">
          {user[el] && (
            <>
              <span>{el.replace('user', '')}:</span> <span>{user[el]}</span>
            </>
          )}
        </GridWrap>
      ))}

      <GridWrap mm="40px" cg="3vw" gtc="1fr 1fr 1fr">
        <Button>Edit</Button>
        <div></div>
        <Button>Delete</Button>
      </GridWrap>
    </Div>
  );
};

export default ProfileCard;
