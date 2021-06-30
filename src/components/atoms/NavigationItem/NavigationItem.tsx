import React from 'react';
import { StyledNavLink } from './NavigationItem.styles';

export interface NavItemProps {
  children: string;
  path: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const NavigationItem: React.FC<NavItemProps> = (props) => {
  return (
    <StyledNavLink {...props} to={props.path} activeClassName="active">
      {props.children}
    </StyledNavLink>
  );
};
