import GridWrap from 'components/shared/GridWrap/GridWrap';
import Button from 'components/shared/Button/Button';
import { Div } from './ProfileCard.styled';

import { useAuth } from 'utils/hooks';
import { USER_FIELDS } from 'utils/constants';

const ProfileCard = () => {
  const user = useAuth();

  return (
    <Div>
      <img src={user.userAvatarUrl} alt="user-avatar" />
      {USER_FIELDS.map(el => (
        <p>
          {el.replace('user', '')}: {user[el]}
        </p>
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
