import React from 'react';
import Login from './Login';
import { screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider';
import { validationMessages } from 'assets/constans/index';

describe('Login component', () => {
  afterEach(cleanup);

  it('logging in with valid user data', async () => {
    const handleSubmit = jest.fn();
    renderWithThemeProvider(<Login onSubmit={handleSubmit} />);

    const validUserData = {
      email: 'radio001@o2.pl',
      password: 'Test123'
    };

    //   Fill out the form
    const { email, password } = validUserData;
    fireEvent.change(screen.getByPlaceholderText(/Enter email/), { target: { value: email } });
    fireEvent.change(screen.getByPlaceholderText(/Enter password/), {
      target: { value: password }
    });
    const signInButton = screen.getByTestId('sign-in');
    fireEvent.click(signInButton);
    await waitFor(() => expect(handleSubmit).toHaveBeenCalledWith(validUserData));
  });
  it('displays messages about required inputs in submitted form when it is not filled with the data', async () => {
    renderWithThemeProvider(<Login />);

    const signInButton = screen.getByTestId('sign-in');
    fireEvent.click(signInButton);
    const { email, password } = validationMessages;
    await waitFor(() => {
      expect(screen.getByText(email.required)).toBeInTheDocument();
      expect(screen.getByText(password.required)).toBeInTheDocument();
    });
  });
  it('displays messages about minimum length of entered text in inputs in submitted form, when it is filled with the valid data', async () => {
    renderWithThemeProvider(<Login />);

    const invalidMinUserData = {
      email: 'A',
      password: 'A'
    };

    //   Fill out the form
    const { email, password } = invalidMinUserData;
    fireEvent.change(screen.getByPlaceholderText(/Enter email/), { target: { value: email } });
    fireEvent.change(screen.getByPlaceholderText(/Enter password/), {
      target: { value: password }
    });
    const signInButton = screen.getByTestId('sign-in');
    fireEvent.click(signInButton);
    await waitFor(() => {
      expect(screen.getByText(validationMessages.email.min)).toBeInTheDocument();
      expect(screen.getByText(validationMessages.password.min)).toBeInTheDocument();
    });
  });
  it('displays messages about minimum length of entered text in inputs in submitted form, when it is filled with the invalid data', async () => {
    renderWithThemeProvider(<Login />);

    const invalidMaxUserData = {
      email: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate sed laborum explicabo',
      password: 'Lorem ipsum dolor sit amet'
    };

    //   Fill out the form
    const { email, password } = invalidMaxUserData;
    fireEvent.change(screen.getByPlaceholderText(/Enter email/), {
      target: { value: email }
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter password/), {
      target: { value: password }
    });
    const signInButton = screen.getByTestId('sign-in');
    fireEvent.click(signInButton);
    await waitFor(() => {
      expect(screen.getByText(validationMessages.email.max)).toBeInTheDocument();
      expect(screen.getByText(validationMessages.password.max)).toBeInTheDocument();
    });
  });
});
