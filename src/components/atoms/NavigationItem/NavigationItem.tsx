import React from 'react';
import { StyledNavLink, StyledNavListItem } from './NavigationItem.styles';

export interface NavItemProps {
  children: string;
  path: string;
}

export const NavigationItem: React.FC<NavItemProps> = ({ path, children }) => {
  return (
    <StyledNavListItem>
      <StyledNavLink to={path} activeClassName="active">
        {children}
      </StyledNavLink>
    </StyledNavListItem>
  );
};
