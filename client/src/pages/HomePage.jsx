import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Container from 'components/shared/Container/Container';
import GrigWrap from 'components/shared/GrigWrap/GrigWrap';
import Button from 'components/shared/Button/Button';
import { loginThunk } from 'store/auth/authOperations';

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDemo = () => {
    dispatch(loginThunk({ email: 'demo@mail.com', password: 'demo123' }));
    // .unwrap().then(pld => console.log(pld)).catch(err => console.log(err));
  };

  const handleSignin = () => {
    navigate('/signin', { replace: true });
  };

  return (
    <Container
      w="320px"
      h="100vh"
      d="flex"
      fd="column"
      jc="center"
      t1="Phone Book"
      ta="center"
    >
      <GrigWrap gtc="1fr 1fr" cg="20px">
        <Button onClick={handleDemo}>Try demo</Button>
        <Button onClick={handleSignin}>Log in</Button>
      </GrigWrap>
    </Container>
  );
};

export default HomePage;
