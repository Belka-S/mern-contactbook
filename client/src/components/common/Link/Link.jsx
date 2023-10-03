import PropTypes from 'prop-types';

import { RouteLink } from './Link.styled';

const Link = ({ to, ta, children }) => {
  return (
    <RouteLink to={to} ta={ta}>
      {children}
    </RouteLink>
  );
};

export default Link;

Link.propTypes = {
  to: PropTypes.string,
  ta: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
