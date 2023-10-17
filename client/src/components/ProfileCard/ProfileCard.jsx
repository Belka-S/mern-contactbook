import Container from 'components/shared/Container/Container';

import { useAuth } from 'utils/hooks';

const ProfileCard = () => {
  const { userName, userEmail, userAvatarUrl } = useAuth();

  return (
    <Container p="0">
      <img src={userAvatarUrl} alt="user-avatar" />
      <p>{userName}</p>
      <p>{userEmail}</p>
      <p>info</p>
      <p>info</p>
      <p>info</p>
    </Container>
  );
};

export default ProfileCard;
