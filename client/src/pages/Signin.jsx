import { useState } from 'react';

import Container from 'components/common/Container/Container';
import SigninForm from 'components/AuthForms/SigninForm';
import Modal from 'layouts/Modal/Modal';
import VerifyForm from 'components/AuthForms/VerifyForm';

const Signin = () => {
  const [isModal, setIsModal] = useState(false);

  return (
    <Container w="400px" h="100vh" p="0" d="flex" fd="column" jc="center">
      <SigninForm setIsModal={setIsModal} />

      {isModal && (
        <Modal onClick={() => setIsModal(!isModal)}>
          <VerifyForm />
        </Modal>
      )}
    </Container>
  );
};

export default Signin;
