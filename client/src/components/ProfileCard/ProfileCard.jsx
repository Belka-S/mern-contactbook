import GridWrap from 'components/shared/GridWrap/GridWrap';
import Button from 'components/shared/Button/Button';
import { Avatar, Div } from './ProfileCard.styled';

import { useAuth } from 'utils/hooks';
import { USER_FIELDS } from 'utils/constants';

const ProfileCard = () => {
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

      {USER_FIELDS.map(el => (
        <GridWrap key={el} cg="20px" gtc="1fr 4fr">
          {user[el] && (
            <>
              <span>{el.replace('user', '')}</span>
              <span>
                {el.includes('Created') ? user[el].substring(0, 10) : user[el]}
              </span>
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
