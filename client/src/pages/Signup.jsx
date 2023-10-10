import { useState } from 'react';

import Container from 'components/common/Container/Container';
import SignupForm from 'components/AuthForms/SignupForm';
import Modal from 'layouts/Modal/Modal';
import VerifyForm from 'components/AuthForms/VerifyForm';

const Signup = () => {
  const [isModal, setIsModal] = useState(false);

  return (
    <Container w="400px" h="100vh" p="0" d="flex" fd="column" jc="center">
      <SignupForm setIsModal={setIsModal} />

      {isModal && (
        <Modal onClick={() => setIsModal(!isModal)}>
          <VerifyForm />
        </Modal>
      )}
    </Container>
  );
};

export default Signup;
