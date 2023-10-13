import PropTypes from 'prop-types';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

import { IconBtn } from './IconBtns.styled';

const PassBtn = ({ hide, setHide }) => {
  const onClick = () => {
    if (hide === 'text') setHide('password');
    if (hide === 'password') setHide('text');
  };

  return (
    <IconBtn type="button" onClick={onClick}>
      {hide === 'password' && <BsEye size="18px" />}
      {hide === 'text' && <BsEyeSlash size="18px" />}
    </IconBtn>
  );
};

export default PassBtn;

PassBtn.propTypes = {
  setHide: PropTypes.func,
  hide: PropTypes.string,
};
