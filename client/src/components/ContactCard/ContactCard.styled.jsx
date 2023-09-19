import styled from 'styled-components';

export const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 10px;
  margin-bottom: 10px;

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    padding: 3px;

    border-radius: 50%;
    border: 1px solid #b1b1b1;
    background-color: white;
    transition: border-color 250ms;

    &:hover,
    &:focus {
      cursor: pointer;
      border-color: blue;
    }

    & svg {
      fill: blue;
    }
  }
`;
