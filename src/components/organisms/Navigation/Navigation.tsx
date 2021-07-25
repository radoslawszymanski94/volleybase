import React, { useContext } from 'react';
import { Menu } from 'antd';
import { NavLink, Link } from 'react-router-dom';
import { StyledButtonWrapper, StyledHeader } from './Navigation.styles';
import { useAuth } from 'auth/AuthProvider';
import { Button } from 'components/atoms/Button/Button';

const Navigation: React.FC = () => {
  const { authenticated, signOut } = useAuth();
  return (
    <StyledHeader>
      <Menu mode="horizontal">
        <Menu.Item key={'/'}>
          <NavLink to="/">Dashboard</NavLink>
        </Menu.Item>
        {authenticated ? (
          <Menu.Item key={'/add'}>
            <NavLink to="/add">Add user</NavLink>
          </Menu.Item>
        ) : null}
        <StyledButtonWrapper className="logo">
          {authenticated ? (
            <Link as={Button} onClick={() => signOut()}>
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
