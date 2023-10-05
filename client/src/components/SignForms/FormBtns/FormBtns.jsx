import PropTypes from 'prop-types';
import { FcGoogle } from 'react-icons/fc';
import { MdArrowForwardIos } from 'react-icons/md';

import Container from 'components/common/Container/Container';
import { SignButton, IconButton } from './FormBtns.styled';

const SignBtn = ({ onClick, type, disabled, children }) => {
  return (
    <SignButton onClick={onClick} type={type} disabled={disabled}>
      {children}
    </SignButton>
  );
};

const GoogleBtn = ({ onClick, type, disabled }) => {
  return (
    <IconButton onClick={onClick} type={type} disabled={disabled}>
      <Container p="0" d="flex" ai="center">
        <FcGoogle size="20px" />
        <pre> </pre>Sign in with Google
      </Container>
      <MdArrowForwardIos size="16px" />
    </IconButton>
  );
};

export { SignBtn, GoogleBtn };

SignButton.propTepes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.oneOf(['img', 'png', 'svg']),
  ]),
};

IconButton.propTepes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.oneOf(['img', 'png', 'svg']),
  ]),
};
