import React from 'react';
import { Button } from './Button';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider';

describe('Button', () => {
  const mockClick = jest.fn();
  beforeEach(async () => {
    await waitFor(() =>
      renderWithThemeProvider(
        <Button isBig isRounded isPrimary onClick={mockClick}>
          Submit
        </Button>
      )
    );
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });
  it('calls a function on a click', () => {
    const button = screen.getByText('Submit');
    fireEvent.click(button);
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});
