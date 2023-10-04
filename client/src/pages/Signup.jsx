import { Toast } from 'components/common/Toast/Toast';

import Container from 'components/common/Container/Container';
import SignupForm from 'components/SignForms/SignupForm';

const Signup = () => (
  <Container w="400px" h="100vh" p="0" d="flex" fd="column" jc="center">
    <SignupForm />
    <Toast />
  </Container>
);

export default Signup;
