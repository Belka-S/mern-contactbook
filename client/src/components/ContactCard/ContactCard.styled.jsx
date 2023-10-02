import styled from 'styled-components';
import { themes } from 'styles/themes';

export const Div = styled.div`
  margin-bottom: 15px;
  margin-left: 21%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 10px;

  & a {
    padding: 3px;
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    border: 1px solid ${themes.colors.border};
    background-color: ${themes.colors.white};
    transition: border-color 250ms, background-color 250ms;

    &:hover,
    &:focus {
      cursor: pointer;
      border-color: ${themes.colors.hovered};
      background-color: ${themes.colors.ligthBlue};
    }

    & svg {
      fill: ${themes.colors.hovered};
    }
  }
`;

export const List = styled.ul`
  margin-bottom: 10px;

  list-style: none;
  font-size: 12px;

  @media screen and (width >= 768px) {
    font-size: 14px;
  }

  @media screen and (width >= 1280px) {
    font-size: 16px;
  }

  & li {
    padding-block: 5px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 20px;
    grid-template-areas: 'key value value value value';

    & span {
      &:nth-of-type(1) {
        grid-area: key;
        text-align: right;

        color: ${themes.colors.placeholder};

        @media screen and (width < 768px) {
          letter-spacing: -1px;
        }
      }
      &:nth-of-type(2) {
        grid-area: value;
        text-align: left;
      }
    }

    &:not(:last-of-type) {
      border-bottom: 1px solid ${themes.colors.border};
    }
  }

  & + div {
    padding-left: 21%;

    @media screen and (width >= 768px) {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
    }
  }
`;
