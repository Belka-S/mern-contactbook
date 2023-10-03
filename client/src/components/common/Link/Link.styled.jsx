import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { themes } from 'styles/themes';

export const RouteLink = styled(Link)`
  color: ${themes.colors.accent};
  text-decoration: underline;
  text-align: ${({ ta }) => ta};
  font-weight: 400;
`;
