import React from 'react';
import { Menu, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { StyledButtonWrapper, StyledHeader } from './Navigation.styles';

const Navigation: React.FC = () => {
  return (
    <StyledHeader>
      <Menu mode="horizontal">
        <Menu.Item key={'/'}>
          <NavLink to="/">Dashboard</NavLink>
        </Menu.Item>
        <Menu.Item key={'/add'}>
          <NavLink to="/add-user">Add user</NavLink>
        </Menu.Item>
        <StyledButtonWrapper className="logo">
          <Button>Log in</Button>
        </StyledButtonWrapper>
      </Menu>
    </StyledHeader>
  );
};

export default Navigation;
