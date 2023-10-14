import PropTypes from 'prop-types';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

import { IconBtn } from './IconBtns.styled';

const PassBtn = ({ toggle, setToggle }) => {
  const onClick = () => {
    if (toggle === 'text') setToggle('password');
    if (toggle === 'password') setToggle('text');
  };

  return (
    <IconBtn type="button" onClick={onClick}>
      {toggle === 'password' && <BsEye size="18px" />}
      {toggle === 'text' && <BsEyeSlash size="18px" />}
    </IconBtn>
  );
};

export default PassBtn;

PassBtn.propTypes = {
  setToggle: PropTypes.func.isRequired,
  toggle: PropTypes.string.isRequired,
};
