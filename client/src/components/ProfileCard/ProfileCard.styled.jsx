import styled from 'styled-components';

export const Div = styled.div`
  position: relative;

  & img {
    width: 200px;
    margin-bottom: 20px;
    border-radius: 50%;
  }

  & span {
    padding-block: 5px;
  }

  & #grid:last-of-type {
    padding-left: 21%;

    @media screen and (width > 768px) {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
    }
  }
`;
