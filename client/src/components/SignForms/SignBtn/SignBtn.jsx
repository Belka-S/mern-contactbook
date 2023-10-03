import PropTypes from 'prop-types';

import { Button } from './SignBtn.styled';

const SignBtn = ({ onClick, type, disabled, children }) => {
  return (
    <Button onClick={onClick} type={type} disabled={disabled}>
      {children}
    </Button>
  );
};

export default SignBtn;

Button.propTepes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.oneOf(['img', 'png', 'svg']),
  ]),
};
