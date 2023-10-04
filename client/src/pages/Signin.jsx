import { Toast } from 'components/common/Toast/Toast';

import Container from 'components/common/Container/Container';
import SigninForm from 'components/SignForms/SigninForm';

const Signup = () => (
  <Container w="400px" h="100vh" p="0" d="flex" fd="column" jc="center">
    <SigninForm />
    <Toast />
  </Container>
);

export default Signup;
