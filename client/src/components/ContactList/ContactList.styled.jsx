import styled from 'styled-components';

import { themes } from 'styles/themes';

export const List = styled.ul`
  width: 100%;
  padding: 0;
  display: inline-flex;
  flex-direction: column;

  font-weight: 500;
  counter-reset: section;
  list-style-type: none;

  li {
    display: inline-flex;
    padding: 3px 10px 1px;

    gap: 5px;
    cursor: pointer;

    &::before {
      counter-increment: section;
      content: counters(section, '.') '.';
    }

    button {
      margin-left: auto;
      padding: 0;
      background-color: transparent;
      border-color: transparent;
      font-weight: 700;

      &:hover,
      &:focus {
        color: ${themes.colors.failed};
      }
    }
  }

  & .active {
    background-color: ${themes.colors.saccess};
    color: ${themes.colors.white};
  }
`;
