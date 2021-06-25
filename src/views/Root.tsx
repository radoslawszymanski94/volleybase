import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../assets/styles/GlobalStyles';
import { theme } from '../assets/styles/theme';

const Root: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <p>Siema</p>
      </ThemeProvider>
    </div>
  );
};

export default Root;
