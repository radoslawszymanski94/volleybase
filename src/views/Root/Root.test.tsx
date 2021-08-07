import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider';
import { matchMedia } from 'helpers/matchMediaTesting';
import Root from './Root';

describe('Root component', () => {
  beforeEach(async () => {
    matchMedia();
    await waitFor(() => renderWithThemeProvider(<Root />));
  });
  it('renders properly', async () => {
    expect(screen.getAllByText('Dashboard')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Sign in')[0]).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText('Player info')).toBeInTheDocument();
    });
    expect(screen.getByText('Search player')).toBeInTheDocument();
  });
});
