import styled from 'styled-components';

export const Div = styled.div`
  margin: ${({ m = '0 auto' }) => m};
  margin: ${({ p }) => p};
  width: 100%;
  position: relative;

  background-color: transparent;

  padding-inline: ${({ pi = '10px' }) => pi};
  padding-top: ${({ pt }) => pt};
  padding-bottom: ${({ pb }) => pb};

  @media screen and (min-width: 320px) {
    // width: 300px;
    max-width: 320px;
  }

  @media screen and (width >= 768px) {
    // width: 720px;
    max-width: 768px;
    padding-inline: ${({ pi = '24px' }) => pi};
    padding-top: ${({ pt }) => pt};
    padding-bottom: ${({ pb }) => pb};
  }

  @media screen and (width >= 1280px) {
    // width: 1200px;
    max-width: 1280px;
    padding-inline: ${({ pi = '40px' }) => pi};
    padding-top: ${({ pt }) => pt};
    padding-bottom: ${({ pb }) => pb};
  }

  h1,
  h2,
  h3 {
    margin-bottom: 5px;
    margin: ${({ mt }) => mt};
    font-family: 'Montserrat', sans-serif;
    text-align: ${({ ta }) => ta};
    font-size: 18px;

    @media screen and (width >= 768px) {
      margin-bottom: 10px;
      font-size: 20px;
    }
    @media screen and (width >= 1280px) {
      margin-bottom: 15px;
      font-size: 26px;
    }
  }

  h1 {
    font-size: 26px;

    @media screen and (width >= 768px) {
      font-size: 30px;
    }
    @media screen and (width >= 1280px) {
      font-size: 36px;
    }
  }
`;
