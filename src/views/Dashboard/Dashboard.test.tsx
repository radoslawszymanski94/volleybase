import React from 'react';
import Dashboard from './Dashboard';
import { cleanup, screen, waitFor } from '@testing-library/react';
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider';
import { matchMedia } from 'helpers/matchMediaTesting';

describe('Dashboard component', () => {
  afterEach(cleanup);
  beforeEach(async () => {
    matchMedia();
    await waitFor(() => renderWithThemeProvider(<Dashboard />));
  });

  it('renders properly', async () => {
    await waitFor(() => {
      expect(screen.getByText(/Dashboard/)).toBeInTheDocument();
      expect(screen.getByText(/Player info/)).toBeInTheDocument();
      expect(screen.getByText(/Search player/)).toBeInTheDocument();
      expect(screen.getByText(/VolleyBase/)).toBeInTheDocument();
    });
  });
});
