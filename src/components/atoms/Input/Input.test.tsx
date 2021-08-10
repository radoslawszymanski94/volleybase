import React from 'react';
import { Input } from './Input';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider';

describe('Input', () => {
  beforeEach(async () => {
    await waitFor(() => renderWithThemeProvider(<Input type="text" name="name" placeholder="Name" />));
    screen.getByPlaceholderText('Name');
  });
  it('properly handles value change', () => {
    const input = screen.getByPlaceholderText(/Name/);
    fireEvent.change(input, { target: { value: 'Test' } });
    expect(input).toHaveValue('Test');
  });
});
