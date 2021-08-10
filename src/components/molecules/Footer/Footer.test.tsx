import React from 'react';
import { Footer } from './Footer';
import { screen, waitFor } from '@testing-library/react';
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider';

describe('Footer', () => {
  it('renders properly', async () => {
    await waitFor(() => renderWithThemeProvider(<Footer>Footer</Footer>));
    expect(screen.getByText(/Footer/)).toBeInTheDocument();
  });
});
