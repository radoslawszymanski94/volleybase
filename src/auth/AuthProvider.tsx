import { auth } from 'services/firebase';
import { useHistory } from 'react-router-dom';
import { createContext, useState, useContext, FC, ReactNode } from 'react';
import { error, success } from 'helpers/messages';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({
  authenticated: false,
  signIn: (email, password, messageSuccess, messageError) => {},
  signOut: (messageSuccess, messageError) => {},
  signUp: (email, password, messageSuccess, messageError) => {}
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  const history = useHistory();

  const signUp = (email, password, messageSuccess, messageError) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => success(messageSuccess))
      .then(() => history.push('/login'))
      .catch(() => error(messageError));
  };

  const signIn = (email, password, messageSuccess, messageError) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => setAuthenticated(true))
      .then(() => success(messageSuccess))
      .then(() => history.push('/add'))
      .catch(() => error(messageError));
  };

  const signOut = (messageSuccess, messageError) => {
    auth
      .signOut()
      .then(() => setAuthenticated(false))
      .then(() => success(messageSuccess))
      .catch(() => error(messageError));
  };

  const value = {
    authenticated,
    signIn,
    signUp,
    signOut
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
