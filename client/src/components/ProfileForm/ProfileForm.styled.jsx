import styled from 'styled-components';

import { themes } from 'styles/themes';

export const Div = styled.div`
  position: relative;

  & span {
    padding-block: 5px;
    font-size: 20px;
    font-weight: 500;

    &:nth-of-type(2n + 1) {
      text-align: end;
      color: ${themes.colors.placeholder};

      &::first-letter {
        text-transform: lowercase;
      }
    }
  }

  & #grid:last-of-type {
    padding-left: 21%;

    @media screen and (width > 768px) {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
    }
  }
`;

export const Avatar = styled.div`
  width: 200px;
  height: 200px;
  margin: 12px 0 20px 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Averia Sans Libre', sans-serif;
  font-size: 72px;
  font-weight: 700;

  border: 1px solid ${themes.colors.border};
  border-radius: 50%;
  background-color: ${themes.colors.white};
  background-size: cover;
`;
