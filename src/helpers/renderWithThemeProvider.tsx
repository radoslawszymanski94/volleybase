import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from 'auth/AuthProvider';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';

export const renderWithThemeProvider = (children) => {
  return render(
    <Router>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <MainTemplate>{children}</MainTemplate>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
};
