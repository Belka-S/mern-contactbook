import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;

export const NavLink = styled(Link)`
  padding: 2px 5px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 20px;

  &:not(:last-of-type) {
    margin-right: 40px;
  }

  &.active {
    color: white;
    background-color: tomato;
  }

  /* &:global(.active) { } */
`;

export const Div = styled.div`
  display: flex;
  font-weight: 700;

  & button {
    margin-left: 30px;
    padding: 0 20px;
  }
`;
