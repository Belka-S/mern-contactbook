import PropTypes from 'prop-types';

import { MainButton } from './Button.styled';

const Button = ({ onClick, type, disabled, children }) => {
  return (
    <MainButton onClick={onClick} type={type} disabled={disabled}>
      {children}
    </MainButton>
  );
};

export default Button;

Button.propTepes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
