import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  line-height: 1.3;
  background-color: #cfdae5;
  h1,
  h2 {
    margin-bottom: 5px;
    font-family: 'Montserrat', sans-serif;
  }
  h1 {
    font-size: 30px;
  }

  padding-top: ${({ paddingTop }) => paddingTop}px;
  padding-bottom: ${({ paddingBottom }) => paddingBottom}px;
  @media screen and (min-width: 320px) {
    // max-width: 300px;
  }
  @media screen and (min-width: 768px) {
    // max-width: 700px;
    padding-top: ${({ paddingTop }) => paddingTop}px;
    padding-bottom: ${({ paddingBottom }) => paddingBottom}px;
    h1,
    h2 {
      margin-bottom: 10px;
    }
  }
  @media screen and (min-width: 1280px) {
    // max-width: 1150px;
    padding-top: ${({ paddingTop }) => paddingTop}px;
    padding-bottom: ${({ paddingBottom }) => paddingBottom}px;
    h1,
    h2 {
      margin-bottom: 20px;
    }
  }
`;
