import { useState } from 'react';

import GridWrap from 'components/shared/GridWrap/GridWrap';
import ProfileCard from 'components/ProfileCard/ProfileCard';
import ProfileForm from 'components/ProfileForm/ProfileForm';
import { useAuth } from 'utils/hooks';

const ProfilePage = () => {
  const { isLoading } = useAuth();
  const [isProfileForm, setIsProfileForm] = useState(false);

  const gridHeight = window.innerHeight > 600 ? 'calc(100vh - 90px)' : '510px';

  return (
    <GridWrap h={gridHeight} gtc="2fr 3fr">
      <h1>Profile</h1>

      {isProfileForm && !isLoading && (
        <ProfileForm setIsProfileForm={setIsProfileForm} />
      )}
      {!isProfileForm && !isLoading && (
        <ProfileCard setIsProfileForm={setIsProfileForm} />
      )}
    </GridWrap>
  );
};

export default ProfilePage;
