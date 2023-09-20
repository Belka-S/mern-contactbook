import PropTypes from 'prop-types';

import { MainButton } from './Button.styled';

const Button = ({ onClick, children }) => {
  return (
    <MainButton onClick={onClick} type="button">
      {children}
    </MainButton>
  );
};

export default Button;

Button.propTepes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
