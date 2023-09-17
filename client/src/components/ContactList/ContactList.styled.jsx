import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;
  padding: 20px 0;
  display: inline-flex;
  flex-direction: column;

  font-weight: 500;
  counter-reset: section;

  /* counter-reset: section; */
  /* list-style-type: none; */

  li {
    margin-bottom: 10px;
    display: inline-flex;
    padding: 3px 10px 1px;
    border-radius: 5px;

    gap: 5px;
    cursor: pointer;

    &::before {
      counter-increment: section;
      content: counters(section, '.') '.';
    }

    button {
      margin-left: auto;
      padding: 0 20px;
      background-color: transparent;
      border-color: transparent;
      font-weight: 700;

      &:hover,
      &:focus {
        color: tomato;
      }
    }
  }
  & .active {
    background-color: teal;
    color: white;
  }
`;
