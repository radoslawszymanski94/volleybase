import React from 'react';
import Signup from './Signup';
import { screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider';
import { validationMessages } from 'assets/constans';
import faker from 'faker';

describe('Signup component', () => {
  afterEach(cleanup);

  it('creates user with valid data', async () => {
    const handleSubmit = jest.fn();
    await waitFor(() => renderWithThemeProvider(<Signup onSubmit={handleSubmit} />));

    const validUserData = {
      email: faker.internet.email(),
      password: faker.internet.password()
    };

    //   Fill out the form
    const { email, password } = validUserData;
    fireEvent.change(screen.getByPlaceholderText(/Enter email/), { target: { value: email } });
    fireEvent.change(screen.getByPlaceholderText(/Enter password/), {
      target: { value: password }
    });
    const signUpButton = screen.getByTestId('sign-up');
    fireEvent.click(signUpButton);
    await waitFor(() => expect(handleSubmit).toHaveBeenCalledWith(validUserData));
  });
  it('displays messages about required inputs in submitted form when it is not filled with the data', async () => {
    renderWithThemeProvider(<Signup />);

    const signUpButton = screen.getByTestId('sign-up');
    fireEvent.click(signUpButton);
    const { email, password } = validationMessages;
    await waitFor(() => {
      expect(screen.getByText(email.required)).toBeInTheDocument();
      expect(screen.getByText(password.required)).toBeInTheDocument();
    });
  });
  it('displays messages about minimum length of entered text in inputs in submitted form, when it is filled with the valid data', async () => {
    renderWithThemeProvider(<Signup />);

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
    const signUpButton = screen.getByTestId('sign-up');
    fireEvent.click(signUpButton);
    await waitFor(() => {
      expect(screen.getByText(validationMessages.email.min)).toBeInTheDocument();
      expect(screen.getByText(validationMessages.password.min)).toBeInTheDocument();
    });
  });
  it('displays messages about minimum length of entered text in inputs in submitted form, when it is filled with the invalid data', async () => {
    renderWithThemeProvider(<Signup />);

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
    const signUpButton = screen.getByTestId('sign-up');
    fireEvent.click(signUpButton);
    await waitFor(() => {
      expect(screen.getByText(validationMessages.email.max)).toBeInTheDocument();
      expect(screen.getByText(validationMessages.password.max)).toBeInTheDocument();
    });
  });
});
