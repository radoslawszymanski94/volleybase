import React from 'react';
import { StyledNav, StyledNavList, StyledNavButton } from './Navigation.styles';
import { Button } from 'components/atoms/Button/Button';
import { NavigationItem } from 'components/atoms/NavigationItem/NavigationItem';

const Navigation: React.FC = () => {
  return (
    <StyledNav>
      <StyledNavList>
        <NavigationItem path="/">Dashboard</NavigationItem>
        <NavigationItem path="/add-user">Add user</NavigationItem>
      </StyledNavList>
      <StyledNavButton>
        <Button isPrimary isBig isRounded>
          Log in
        </Button>
      </StyledNavButton>
    </StyledNav>
  );
};

export default Navigation;
