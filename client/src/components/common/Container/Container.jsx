import PropTypes from 'prop-types';

import { Div } from './Container.styled';

const Container = ({
  w,
  h,
  m,
  p,
  d,
  fd,
  ai,
  jc,
  t1,
  t2,
  t3,
  ta,
  mt,
  children,
}) => (
  <Div w={w} h={h} m={m} p={p} d={d} fd={fd} ai={ai} jc={jc} ta={ta} mt={mt}>
    {t1 && <h1>{t1}</h1>}
    {t2 && <h2>{t2}</h2>}
    {t3 && <h3>{t3}</h3>}
    {children}
  </Div>
);

Container.propTypes = {
  m: PropTypes.string,
  p: PropTypes.string,
  w: PropTypes.string,
  h: PropTypes.string,
  d: PropTypes.string,
  fd: PropTypes.string,
  ai: PropTypes.string,
  jc: PropTypes.string,
  t1: PropTypes.string,
  t2: PropTypes.string,
  t3: PropTypes.string,
  ta: PropTypes.string,
  mt: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Container;
