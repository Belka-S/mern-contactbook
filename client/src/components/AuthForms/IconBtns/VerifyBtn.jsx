import { BsEye, BsEyeSlash } from 'react-icons/bs';

import { IconBtn } from './IconBtns.styled';

const VerifyBtn = () => {
  return (
    <IconBtn>
      <BsEye />
      <BsEyeSlash />
    </IconBtn>
  );
};

export default VerifyBtn;
