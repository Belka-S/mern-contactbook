import { useState } from 'react';

import { useAuth } from 'utils/hooks';
import Container from 'components/common/Container/Container';
import Header from 'layouts/Header/Header';
import Modal from 'layouts/Modal/Modal';

const SharedLayuot = () => {
  const { userVerifiedEmail } = useAuth();
  const [isModal, setIsModal] = useState(!userVerifiedEmail);

  const onClick = () => {
    setIsModal(!isModal);
  };

  return (
    <Container>
      <Header />
      {isModal && <Modal onClick={onClick}>Modal Window</Modal>}
    </Container>
  );
};

export default SharedLayuot;
