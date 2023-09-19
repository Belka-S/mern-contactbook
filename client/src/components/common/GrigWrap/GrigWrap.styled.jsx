import styled from 'styled-components';

export const Div = styled.div`
  /* max-width: 1280px; */
  display: grid;
  /* grid-auto-rows: 300px; */
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-row-gap: 10px;
  grid-column-gap: 40px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;
