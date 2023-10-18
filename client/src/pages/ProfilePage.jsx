// import Container from 'components/shared/Container/Container';
import GridWrap from 'components/shared/GridWrap/GridWrap';
import ProfileCard from 'components/ProfileCard/ProfileCard';

const ProfilePage = () => {
  const gridHeight = window.innerHeight > 600 ? 'calc(100vh - 90px)' : '510px';

  return (
    <GridWrap h={gridHeight} gtc="2fr 3fr">
      <h1>Profile</h1>
      <ProfileCard />
    </GridWrap>
  );
};

export default ProfilePage;
