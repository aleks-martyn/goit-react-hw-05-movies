import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  padding: 20px 35px;
  box-shadow: 0px 4px 4px #d3d3d3;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  font-size: 24px;
  font-weight: 500;
  transition: color 0.2s ease-in-out;
  color: grey;

  &:not(:last-child) {
    margin-right: 30px;
  }

  &.active {
    color: teal;
  }

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
