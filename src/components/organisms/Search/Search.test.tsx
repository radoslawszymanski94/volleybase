import React from 'react';
import Search from './Search';
import { screen, waitFor } from '@testing-library/react';
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider';

describe('Search component', () => {
  beforeEach(async () => {
    const mockSearch = jest.fn();
    await waitFor(() => renderWithThemeProvider(<Search search={mockSearch} />));
  });

  it('renders properly', () => {
    expect(screen.getByPlaceholderText(/Enter player's name/)).toBeInTheDocument();
  });
  it('renders title', () => {
    expect(screen.getByText(/Search player/)).toBeInTheDocument();
  });
});
