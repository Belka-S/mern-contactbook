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
      margin: 0 auto;
    }
  }
`;
