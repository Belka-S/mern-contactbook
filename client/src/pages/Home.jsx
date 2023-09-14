import { NavLink } from 'react-router-dom';

import { Section } from 'components/Section/Section';

const Home = () => (
  <Section mainTitle="PhoneBook">
    <NavLink to="/signin">Log in</NavLink>
  </Section>
);

export default Home;
