import styled from 'styled-components';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const SlickSlider = styled(Slider)`
  &.wrapper {
    text-align: center;

    h3 {
      font-family: 'Montserrat', sans-serif;
      font-size: 20px;
      font-weight: 600;
    }

    & img {
      width: 250px;
      height: 250px;
      margin: 0 auto 20px;

      @media screen and (width >768px) {
        width: 400px;
        height: 400px;
      }
    }
  }
`;
