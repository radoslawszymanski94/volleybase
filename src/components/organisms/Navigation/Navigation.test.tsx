import React from 'react';
import Navigation from './Navigation';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider';

describe('Navigation', () => {
  beforeEach(async () => {
    await waitFor(() => renderWithThemeProvider(<Navigation />));
  });

  it('renders properly', () => {
    expect(screen.getAllByText('Dashboard')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Sign in')[0]).toBeInTheDocument();
  });
  it("item becomes active when it's clicked", () => {
    const dashboard = screen.getAllByText('Dashboard')[0];
    fireEvent.click(dashboard);
    const activeMenuItem = document.querySelector('.active');
    expect(activeMenuItem).toBeInTheDocument();
  });
});
