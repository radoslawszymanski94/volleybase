import React, {FC} from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import { Title } from 'components/atoms/Title/Title.styles';

const Root: FC = () => {
  return (
      <ThemeProvider theme={theme}>
            <GlobalStyles />
      </ThemeProvider>
  );
};

export default Root;
