import PropTypes from 'prop-types';

import { Div } from './Container.styled';

const Container = ({ m, p, t1, t2, t3, pi, pt, pb, ta, mt, children }) => (
  <Div m={m} p={p} pi={pi} pt={pt} pb={pb} ta={ta} mt={mt}>
    {t1 && <h1>{t1}</h1>}
    {t2 && <h2>{t2}</h2>}
    {t3 && <h3>{t3}</h3>}
    {children}
  </Div>
);

Container.propTypes = {
  m: PropTypes.string,
  p: PropTypes.string,
  t1: PropTypes.string,
  t2: PropTypes.string,
  pi: PropTypes.string,
  pt: PropTypes.string,
  pb: PropTypes.string,
  ta: PropTypes.string,
  mt: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Container;
