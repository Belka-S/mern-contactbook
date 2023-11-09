import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Container from 'components/shared/Container/Container';
import GridWrap from 'components/shared/GridWrap/GridWrap';
import Button from 'components/shared/Button/Button';
import Slider from 'components/shared/Slider/Slider';
import { loginThunk } from 'store/auth/authOperations';

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDemo = () => {
    dispatch(loginThunk({ email: 'demo@mail.com', password: '123123' }));
    // .unwrap().then(pld => console.log(pld)).catch(err => console.log(err));
  };

  const handleSignin = () => {
    navigate('/signin', { replace: true });
  };

  return (
    <Container d="flex">
      <Container w="350px" d="flex" fd="column" jc="center" ta="center">
        <h1>Contact Book</h1>
        <GridWrap gtc="1fr 1fr" cg="20px">
          <Button onClick={handleDemo}>Try demo</Button>
          <Button onClick={handleSignin}>Log in</Button>
        </GridWrap>
      </Container>

      <Container w="50%" h="100vh" d="flex" fd="column" jc="center" ta="center">
        <Slider />
      </Container>
    </Container>
  );
};

export default HomePage;
