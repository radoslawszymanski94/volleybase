import React from 'react';
import MainTemplate from './MainTemplate';
import { screen, waitFor } from '@testing-library/react';
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider';

describe('Main template component', () => {
  beforeEach(async () => {
    await waitFor(() =>
      renderWithThemeProvider(
        <MainTemplate>
          <p>Test</p>
        </MainTemplate>
      )
    );
  });

  it('renders properly', () => {
    expect(screen.getByText(/Test/)).toBeInTheDocument();
    expect(screen.getAllByText(/VolleyBase/)[0]).toBeInTheDocument();
  });
});
