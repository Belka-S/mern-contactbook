import styled, { css } from 'styled-components';
import { BsPlus, BsCheck, BsExclamation } from 'react-icons/bs';

import { themes } from 'styles/themes';

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

    & + svg {
      border-color: ${themes.colors.hovered};
      fill: ${themes.colors.hovered};
    }
  }
`;

export const AvatarMsg = styled.span`
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  color: ${themes.colors.error};
`;

const IconStyles = css`
  width: 28px;
  height: 28px;
  position: absolute;
  bottom: 40px;
  left: 205px;
  border: 1px solid ${themes.colors.border};
  border-radius: 50%;
  background-color: ${themes.colors.white};
  cursor: pointer;
  transition: border-color 250ms, fill 250ms;
`;

export const PlusIcon = styled(BsPlus)`
  ${IconStyles};

  &:hover,
  &:focus {
    border-color: ${themes.colors.hovered};
    fill: ${themes.colors.hovered};
  }
`;

export const CheckedIcon = styled(BsCheck)`
  ${IconStyles};

  border-color: ${themes.colors.success};
  fill: ${themes.colors.success};
`;

export const ExclamationIcon = styled(BsExclamation)`
  ${IconStyles};

  border-color: ${themes.colors.error};
  fill: ${themes.colors.error};
`;
