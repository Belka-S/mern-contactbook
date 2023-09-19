import styled from 'styled-components';
import { themes } from 'styles/themes';

export const Div = styled.div`
  margin-bottom: 10px;
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
      fill: ${themes.colors.accent};
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  font-size: 16px;

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
`;
