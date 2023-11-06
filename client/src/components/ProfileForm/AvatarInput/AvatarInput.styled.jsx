import styled, { css } from 'styled-components';
import { BsPlus, BsCheck, BsExclamation } from 'react-icons/bs';

import { themes } from 'styles/themes';

// Avatar messages
export const AvatarMsg = styled.span`
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  color: ${themes.colors.error};
`;

// Avatar
export const Avatar = styled.input`
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Averia Sans Libre', sans-serif;
  font-size: 72px;
  font-weight: 700;

  border-radius: 50%;
  background-color: ${themes.colors.white};
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  cursor: pointer;
  color: transparent;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ abbr }) => `content:"${abbr}"`};
    width: 200px;
    height: 200px;
    color: ${themes.colors.placeholder};
  }

  // &::-webkit-file-upload-button
  &::file-selector-button {
    display: none;
  }

  outline: 1px solid;
  outline-color: ${({ validation }) => {
    switch (validation) {
      case 'noValue':
        return 'transparent';
      case validation:
        return themes.colors[validation];
      default:
        break;
    }
  }};

  transition: border-color 250ms, outline-color 250ms;

  &:hover,
  &:focus {
    outline-color: ${themes.colors.hovered};

    & ~ .plus {
      border-color: ${themes.colors.hovered};
      fill: ${themes.colors.hovered};
    }
  }
`;

// Avatar icons
const setNoValueColor = (validation, color) =>
  validation === true || validation === 'noValue'
    ? themes.colors[color]
    : 'transparent';

const setSuccessColor = (validation, color) =>
  validation === 'success' ? themes.colors[color] : 'transparent';

const setErrorColor = validation =>
  validation === 'error' ? themes.colors.error : 'transparent';

const IconStyles = css`
  width: 28px;
  height: 28px;
  position: absolute;
  bottom: 20px;
  left: 160px;
  border: 1px solid ${themes.colors.border};
  border-radius: 50%;
  background-color: ${themes.colors.white};
  cursor: pointer;
  transition: border-color 250ms, fill 250ms, background-color 250ms;
`;

export const PlusIcon = styled(BsPlus)`
  ${IconStyles};

  background-color: ${({ validation }) => setNoValueColor(validation, 'white')};
  border-color: ${({ validation }) => setNoValueColor(validation, 'border')};
  fill: ${({ validation }) => setNoValueColor(validation, 'placeholder')};

  &:hover,
  &:focus {
    border-color: ${themes.colors.hovered};
    fill: ${themes.colors.hovered};
  }
`;

export const CheckedIcon = styled(BsCheck)`
  ${IconStyles};

  background-color: ${({ validation }) => setSuccessColor(validation, 'white')};
  border-color: ${({ validation }) => setSuccessColor(validation, 'success')};
  fill: ${({ validation }) => setSuccessColor(validation, 'success')};
`;

export const ExclamationIcon = styled(BsExclamation)`
  ${IconStyles};

  border-color: ${({ validation }) => setErrorColor(validation)};
  fill: ${({ validation }) => setErrorColor(validation)};
`;
