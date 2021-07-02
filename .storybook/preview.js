import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'assets/styles/GlobalStyles.tsx';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundGray};
`;

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
        <StyledWrapper>
          <Story />
        </StyledWrapper>
      </ThemeProvider>
    </BrowserRouter>
  )
];
