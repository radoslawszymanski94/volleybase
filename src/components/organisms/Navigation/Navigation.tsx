import React, { FC } from 'react';
import { Menu } from 'antd';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Button } from 'components/atoms/Button/Button';
import { StyledButtonWrapper, StyledHeader } from './Navigation.styles';
import { useAuth } from 'auth/AuthProvider';
import { signoutError, signoutSuccess } from 'assets/constans';

export interface NavigationProps {
  theme?: Object;
}

const Navigation: FC = () => {
  const { authenticated, signOut } = useAuth();
  return (
    <StyledHeader>
      <Menu mode="horizontal">
        <Menu.Item key="dashboard">
          <NavLink to="/" exact activeClassName="active">
            Dashboard
          </NavLink>
        </Menu.Item>
        {authenticated ? (
          <Menu.Item key="add">
            <NavLink to="/add">Add user</NavLink>
          </Menu.Item>
        ) : null}
        <StyledButtonWrapper className="logo">
          {authenticated ? (
            <Link to="/" onClick={() => signOut(signoutSuccess, signoutError)}>
              Logout
            </Link>
          ) : (
            <Link to="/login">Log in</Link>
          )}
        </StyledButtonWrapper>
      </Menu>
    </StyledHeader>
  );
};

export default Navigation;
