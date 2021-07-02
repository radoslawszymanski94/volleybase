import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { NavItemProps } from './NavigationItem';

export const StyledNavLink = styled(NavLink)<NavItemProps>`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  padding-bottom: 3px;

  &.active {
    border-bottom: 3px solid ${({ theme }) => theme.colors.mint};
  }
`;
