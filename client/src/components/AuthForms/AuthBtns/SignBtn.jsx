import PropTypes from 'prop-types';

import { SignButton } from './AuthBtns.styled';

export const SignBtn = ({ onClick, disabled, children }) => {
  return (
    <SignButton onClick={onClick} type="submit" disabled={disabled}>
      {children}
    </SignButton>
  );
};

SignButton.propTepes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.oneOf(['img', 'png', 'svg']),
  ]),
};
