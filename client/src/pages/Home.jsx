import { NavLink } from 'react-router-dom';

import { Container } from 'components/common/Container/Container';

const Home = () => (
  <Container pt="40px" t1="PhoneBook">
    <NavLink to="/signin">Log in</NavLink>
  </Container>
);

export default Home;
