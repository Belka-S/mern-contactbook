import { Toast, notify } from 'components/common/Toast/Toast';

import Container from 'components/common/Container/Container';
import SignupForm from 'components/SignForms/SignupForm';

const Signup = () => {
  const qwe = notify('Error happend! Try once again.');
  console.log('qwe: ', qwe);

  return (
    <Container p="0" d="flex" fd="column" jc="center" w="400px" h="100vh">
      <SignupForm />
      {/* <Toast /> */}
    </Container>
  );
};

export default Signup;
