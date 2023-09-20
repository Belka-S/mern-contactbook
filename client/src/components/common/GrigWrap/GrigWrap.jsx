import PropTypes from 'prop-types';

import { Div } from './GrigWrap.styled';

const GrigWrap = ({ h, m, p, rg, cg, mm, gtc, children }) => {
  return (
    <Div h={h} m={m} p={p} rg={rg} cg={cg} mm={mm} gtc={gtc}>
      {children}
    </Div>
  );
};

export default GrigWrap;

GrigWrap.propTypes = {
  h: PropTypes.string,
  m: PropTypes.string,
  p: PropTypes.string,
  rg: PropTypes.string,
  cg: PropTypes.string,
  mm: PropTypes.string,
  gtc: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
