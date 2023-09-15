import PropTypes from 'prop-types';

import { Div } from './Container.styled';

export const Container = ({ mttl, pi, ttl, pt, pb, children }) => (
  <Div pi={pi} pt={pt} pb={pb}>
    {mttl && <h1>{mttl}</h1>}
    {ttl && <h2>{ttl}</h2>}
    {children}
  </Div>
);

Container.propTypes = {
  mttl: PropTypes.string,
  ttl: PropTypes.string,
  pi: PropTypes.string,
  pt: PropTypes.string,
  pb: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
