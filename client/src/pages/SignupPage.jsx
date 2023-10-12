import { useState } from 'react';

import Container from 'components/common/Container/Container';
import SignupForm from 'components/AuthForms/SignupForm';
import Modal from 'layouts/Modal/Modal';
import VerifyForm from 'components/AuthForms/VerifyForm';

const SignupPage = () => {
  const [isVerify, setIsVerify] = useState(false);

  return (
    <Container w="400px" h="100vh" p="0" d="flex" fd="column" jc="center">
      <SignupForm setIsVerify={setIsVerify} />

      {isVerify && (
        <Modal onClick={() => setIsVerify(!isVerify)}>
          <VerifyForm />
        </Modal>
      )}
    </Container>
  );
};

export default SignupPage;
