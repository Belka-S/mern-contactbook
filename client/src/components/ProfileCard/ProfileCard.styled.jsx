import styled from 'styled-components';

import { themes } from 'styles/themes';

export const Div = styled.div`
  position: relative;

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

export const Wrapper = styled.div`
  padding-block: 2px;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-column-gap: 20px;
  text-align: right;

  font-size: 20px;
  font-weight: 500;

  &:not(:nth-last-of-type(2)) {
    border-bottom: 1px solid ${themes.colors.border};
  }

  & span {
    padding-block: 5px;
    text-align: start;

    &:nth-of-type(2n + 1) {
      text-align: end;
      color: ${themes.colors.placeholder};

      &::first-letter {
        text-transform: lowercase;
      }
    }
  }
`;

export const Avatar = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 12px 0 20px 3vw;
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
`;
