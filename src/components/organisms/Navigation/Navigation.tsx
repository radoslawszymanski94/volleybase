import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { StyledButtonWrapper, StyledHeader } from './Navigation.styles';

const { Header } = Layout;

const Navigation: React.FC = () => {
  const onSearch = (value) => console.log(value);

  return (
    <StyledHeader>
      <Menu mode="horizontal" defaultSelectedKeys={['2']}>
        <NavLink to="/">
          <Menu.Item>Dashboard</Menu.Item>
        </NavLink>
        <NavLink to="/add-user">
          <Menu.Item>Add user</Menu.Item>
        </NavLink>
        <StyledButtonWrapper className="logo">
          <Button>Log in</Button>
        </StyledButtonWrapper>
      </Menu>
    </StyledHeader>
  );
};

export default Navigation;
