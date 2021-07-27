import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Dashboard from 'views/Dashboard/Dashboard';
import AddUser from 'views/AddUser/AddUser';
import Login from 'views/Login/Login';
import Signup from 'views/Signup/Signup';
import { AuthProvider } from 'auth/AuthProvider';

const Root: FC = () => {
  return (
    <Router>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <MainTemplate>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/add" component={AddUser} />
            </Switch>
          </MainTemplate>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
};

export default Root;
