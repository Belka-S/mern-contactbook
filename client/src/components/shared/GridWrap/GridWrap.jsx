import PropTypes from 'prop-types';

import { Div } from './GridWrap.styled';

const GridWrap = ({ h, m, p, rg, cg, mm, gtc, children }) => {
  return (
    <Div id="grid" h={h} m={m} p={p} rg={rg} cg={cg} mm={mm} gtc={gtc}>
      {children}
    </Div>
  );
};

export default GridWrap;

GridWrap.propTypes = {
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
