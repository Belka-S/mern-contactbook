import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { themes } from 'styles/themes';

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  margin-bottom: 16px;
  z-index: 10;

  border-bottom: 1px solid black;
  background-color: ${themes.colors.background};
`;

export const NavLink = styled(Link)`
  padding: 2px 5px;
  border-radius: ${themes.radius.s};
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 20px;

  &:not(:last-of-type) {
    margin-right: 40px;
  }

  &.active {
    color: ${themes.colors.accent};
  }

  /* &:global(.active) { } */
`;

export const Div = styled.div`
  display: flex;
  align-items: center;

  font-size: 16px;
  font-weight: 700;

  & button {
    margin-left: 20px;
  }
`;
