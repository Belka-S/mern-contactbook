import styled from 'styled-components';

export const Div = styled.div`
  margin: ${({ m }) => m};
  padding: ${({ p }) => p};
  /* max-width: 1280px; */
  display: grid;
  justify-content: center;

  grid-template-columns: repeat(
    auto-fit,
    minmax(${({ mm = '300px' }) => mm}, 1fr)
  );
  grid-row-gap: ${({ rg = '10px' }) => rg};
  grid-column-gap: ${({ cg = '40px' }) => cg};

  @media screen and (width >= 768px) {
    height: ${({ h }) => h};
    grid-template-columns: ${({ gtc }) => gtc};
  }
`;
