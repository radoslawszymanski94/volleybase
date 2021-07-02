import React from 'react';
import { StyledNavLink } from './NavigationItem.styles';

export interface NavItemProps {
  children: string;
  path: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  theme: Object;
}

export const NavigationItem: React.FC<NavItemProps> = ({ path, children }, props) => {
  return (
    <StyledNavLink {...props} to={path} activeClassName="active">
      {children}
    </StyledNavLink>
  );
};
