import styled from 'styled-components';

export const Div = styled.div`
  margin: ${({ m = '0 auto' }) => m};
  padding: ${({ p = '0 10px' }) => p};
  width: ${({ w = '100%' }) => w};
  height: ${({ h }) => h};
  position: relative;

  display: ${({ d }) => d};
  flex-direction: ${({ fd }) => fd};
  align-items: ${({ ai }) => ai};
  justify-content: ${({ jc }) => jc};

  background-color: transparent;

  @media screen and (min-width: 320px) {
    // width: 300px;
    max-width: 320px;
  }

  @media screen and (width >= 768px) {
    // width: 720px;
    max-width: 768px;
    padding: ${({ p = '0 24px' }) => p};
  }

  @media screen and (width >= 1280px) {
    // width: 1200px;
    max-width: 1280px;
    padding: ${({ p = '0 40px' }) => p};
  }

  h1,
  h2,
  h3 {
    /* margin-bottom: 5px; */
    margin: ${({ mt = '0 0 5px 0' }) => mt};
    font-family: 'Montserrat', sans-serif;
    text-align: ${({ ta }) => ta};
    font-size: 18px;

    @media screen and (width >= 768px) {
      /* margin-bottom: 10px; */
      margin: ${({ mt = '0 0 10px 0' }) => mt};
      font-size: 20px;
    }
    @media screen and (width >= 1280px) {
      /* margin-bottom: 15px; */
      margin: ${({ mt = '0 0 15px 0' }) => mt};
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
