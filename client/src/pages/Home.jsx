import { NavLink } from 'react-router-dom';

import Container from 'components/common/Container/Container';

const Home = () => (
  <Container p="100px 0" t1="PhoneBook">
    <NavLink to="/signin">Log in</NavLink>
  </Container>
);

export default Home;
