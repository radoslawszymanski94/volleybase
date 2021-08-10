import React from 'react';
import AuthenticatedApp from './AuthenticatedApp';
import { screen, waitFor, cleanup } from '@testing-library/react';
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider';
import AddUser from 'views/AddUser/AddUser';

describe('Authenticated App component', () => {
  afterEach(cleanup);

  it('renders sign in page when user is not authenticated', async () => {
    await waitFor(() =>
      renderWithThemeProvider(
        <AuthenticatedApp>
          <AddUser />
        </AuthenticatedApp>
      )
    );
    expect(screen.getByText(/sign in/)).toBeInTheDocument();
  });
});
