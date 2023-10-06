import Container from 'components/common/Container/Container';
import SignupForm from 'components/AuthForms/SignupForm';

const Signup = () => (
  <Container w="400px" h="100vh" p="0" d="flex" fd="column" jc="center">
    <SignupForm />
  </Container>
);

export default Signup;
