import styled from 'styled-components';
import { themes } from 'styles/themes';

export const Button = styled.button`
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-size: 12px;

  @media screen and (width >= 768px) {
    padding: 4px 10px;
    font-size: 14px;
  }

  color: ${themes.colors.white};
  border: 1px solid ${themes.colors.accent};
  border-radius: ${themes.borderRadius.s};
  background-color: ${themes.colors.accent};
  transition: border-color 250ms, background-color 250ms, color 250ms;

  &:hover,
  &:focus {
    border-color: ${themes.colors.hovered};
    background-color: ${themes.colors.hovered};
  }

  &:disabled {
    cursor: auto;
    color: ${themes.colors.border};
    border-color: ${themes.colors.accent};
    background-color: ${themes.colors.accent};
  }
`;
