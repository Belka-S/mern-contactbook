import GridWrap from 'components/shared/GridWrap/GridWrap';
import Container from 'components/shared/Container/Container';
import ProfileCard from 'components/ProfileCard/ProfileCard';

const ProfilePage = () => {
  return (
    <GridWrap gt>
      <Container p="0" t1="Profile">
        <ProfileCard />
      </Container>
    </GridWrap>
  );
};

export default ProfilePage;
