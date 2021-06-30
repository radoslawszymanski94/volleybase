import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  padding-bottom: 3px;

  &.active {
    border-bottom: 3px solid ${({ theme }) => theme.colors.mint};
  }
`;
