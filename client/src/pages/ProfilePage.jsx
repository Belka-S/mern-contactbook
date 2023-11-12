import { useState } from 'react';

import GridWrap from 'components/shared/GridWrap/GridWrap';
import ProfileCard from 'components/ProfileCard/ProfileCard';
import ProfileForm from 'components/ProfileForm/ProfileForm';
import Modal from 'components/shared/Modal/Modal';
import VerifyForm from 'components/AuthForms/VerifyForm';
import { useAuth } from 'utils/hooks';

const ProfilePage = () => {
  const { user, isLoading } = useAuth();
  const [isProfileForm, setIsProfileForm] = useState(false);
  const [isVerify, setIsVerify] = useState(user.verificationCode);

  const gridHeight = window.innerHeight > 600 ? 'calc(100vh - 90px)' : '510px';

  return (
    <GridWrap h={gridHeight} gtc="2fr 3fr">
      <h1>Profile</h1>

      {isProfileForm && !isLoading && (
        <ProfileForm
          setIsProfileForm={setIsProfileForm}
          setIsVerify={setIsVerify}
        />
      )}
      {!isProfileForm && !isLoading && (
        <ProfileCard setIsProfileForm={setIsProfileForm} />
      )}

      {isVerify && (
        <Modal onClick={() => setIsVerify(!isVerify)}>
          <VerifyForm userEmail={isVerify} />
        </Modal>
      )}
    </GridWrap>
  );
};

export default ProfilePage;
