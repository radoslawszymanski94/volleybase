import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Root: FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Switch>
          <Route path="/" />
          <Route path="/dashboard" />
          <Route path="/add-user" />
          <Route path="/login" />
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
