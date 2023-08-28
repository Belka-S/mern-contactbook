import styled from 'styled-components';

export const List = styled.ul`
  padding: 20px 0;
  display: inline-flex;
  flex-direction: column;
  counter-reset: section;

  /* counter-reset: section; */
  /* list-style-type: none; */

  li {
    margin-bottom: 10px;
    display: inline-flex;
    gap: 5px;

    &::before {
      counter-increment: section;
      content: counters(section, '.') '.';
    }

    button {
      margin-left: auto;
      padding: 0 20px;
    }
  }
`;
