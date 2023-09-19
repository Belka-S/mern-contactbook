import PropTypes from 'prop-types';

import { Div } from './Container.styled';

export const Container = ({ t1, t2, t3, pi, pt, pb, ta, mt, children }) => (
  <Div pi={pi} pt={pt} pb={pb} ta={ta} mt={mt}>
    {t1 && <h1>{t1}</h1>}
    {t2 && <h2>{t2}</h2>}
    {t3 && <h3>{t3}</h3>}
    {children}
  </Div>
);

Container.propTypes = {
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
