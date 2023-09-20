import styled from 'styled-components';

import { themes } from 'styles/themes';

export const List = styled.ul`
  width: 100%;
  margin-top: 10px;
  padding: 0;
  display: inline-flex;
  flex-direction: column;

  font-weight: 500;
  counter-reset: section;
  list-style-type: none;

  li {
    display: inline-flex;
    padding: 3px 6px 1px;

    gap: 5px;
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${themes.colors.hovered};
    }

    &::before {
      counter-increment: section;
      content: counters(section, '.') '.';
    }
  }

  & .active {
    background-color: ${themes.colors.accent};
    color: ${themes.colors.white};

    &:hover,
    &:focus {
      color: ${themes.colors.white};
    }
  }
`;
