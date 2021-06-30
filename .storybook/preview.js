import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'assets/styles/GlobalStyles.tsx';
import { BrowserRouter } from 'react-router-dom';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

export const decorators = [
  (Story) => (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    </BrowserRouter>
  )
];
