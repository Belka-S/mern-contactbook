import styled from 'styled-components';

export const Div = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  position: relative;

  line-height: 1.3;
  background-color: transparent;

  padding-inline: ${({ pi = '15px' }) => pi};
  padding-top: ${({ pt }) => pt};
  padding-bottom: ${({ pb }) => pb};

  @media screen and (min-width: 320px) {
    // width: 300px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    // width: 720px;
    padding-inline: ${({ pi = '24px' }) => pi};
    padding-top: ${({ pt }) => pt};
    padding-bottom: ${({ pb }) => pb};
    h1,
    h2 {
      margin-bottom: 10px;
    }
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    // width: 1200px;
    padding-inline: ${({ pi = '40px' }) => pi};
    padding-top: ${({ pt }) => pt};
    padding-bottom: ${({ pb }) => pb};
    h1,
    h2 {
      margin-bottom: 20px;
    }
  }

  h1,
  h2,
  h3 {
    margin-bottom: 5px;
    margin: ${({ mt }) => mt};
    font-family: 'Montserrat', sans-serif;
    text-align: ${({ ta }) => ta};
  }
  h1 {
    font-size: 30px;
  }
`;
