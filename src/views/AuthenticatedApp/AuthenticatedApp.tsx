import React, { FC, ReactElement, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'auth/AuthProvider';
import { StyledText } from './AuthenticatedApp.styles';

interface AuthenticatedAppProps {
  children: ReactNode;
}

const AuthenticatedApp: FC<AuthenticatedAppProps> = ({ children }) => {
  const { authenticated } = useAuth();
  return authenticated ? (
    <>{children}</>
  ) : (
    <StyledText>
      Please <Link to="/login">sign in</Link> to add players.
    </StyledText>
  );
};

export default AuthenticatedApp;
