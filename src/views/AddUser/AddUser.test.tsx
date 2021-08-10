import React from 'react';
import AddUser from './AddUser';
import { screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider';
import { validationMessages } from 'assets/constans/index';

describe('Add User component', () => {
  afterEach(cleanup);

  it('adds player when user is authenticated and submitted form is filled with the valid data', async () => {
    const handleSubmit = jest.fn();
    await waitFor(() => renderWithThemeProvider(<AddUser onSubmit={handleSubmit} />));

    const validPlayerData = {
      name: 'Egor Kliuka',
      nationality: 'Russia',
      position: 'Outside hitter',
      age: 26,
      club: 'Zenit Sankt Petersburg',
      playerImage:
        'https://www.fivb.org/Vis2009/Images/GetImage.asmx?No=79645&type=Press&width=300&height=450&stretch=uniformtofill'
    };

    //   Fill out the form
    const { name, nationality, position, age, club, playerImage } = validPlayerData;
    fireEvent.change(screen.getByPlaceholderText(/Enter player's name/), { target: { value: name } });
    fireEvent.change(screen.getByPlaceholderText(/Enter player's nationality/), {
      target: { value: nationality }
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter player's position/), {
      target: { value: position }
    });
    fireEvent.change(screen.getByTestId('age'), {
      target: { value: age }
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter player's club/), {
      target: { value: club }
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter link to player's image/), {
      target: { value: playerImage }
    });
    const addUserSubmitButton = screen.getByTestId('submit-form');
    fireEvent.click(addUserSubmitButton);
    await waitFor(() => expect(handleSubmit).toHaveBeenCalledWith(validPlayerData));
  });
  it('displays messages about required inputs when user is authenticated and submitted form is not filled with the data', async () => {
    renderWithThemeProvider(<AddUser />);

    const addUserSubmitButton = screen.getByTestId('submit-form');
    fireEvent.click(addUserSubmitButton);
    const { name, nationality, position, club } = validationMessages;
    await waitFor(() => {
      expect(screen.getByText(name.required)).toBeInTheDocument();
      expect(screen.getByText(nationality.required)).toBeInTheDocument();
      expect(screen.getByText(position.required)).toBeInTheDocument();
      expect(screen.getByText(club.required)).toBeInTheDocument();
    });
  });
  it('displays messages about minimum length of entered text in inputs when user is authenticated and submitted form is filled with the valid data', async () => {
    renderWithThemeProvider(<AddUser />);

    const invalidMinPlayerData = {
      name: 'A',
      nationality: 'A',
      position: 'A',
      age: 1,
      club: 'A',
      playerImage: 'A'
    };

    const addUserSubmitButton = screen.getByTestId('submit-form');

    //   Fill out the form
    const { name, nationality, position, age, club, playerImage } = invalidMinPlayerData;
    fireEvent.change(screen.getByPlaceholderText(/Enter player's name/), {
      target: { value: name }
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter player's nationality/), {
      target: { value: nationality }
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter player's position/), {
      target: { value: position }
    });
    fireEvent.change(screen.getByTestId('age'), {
      target: { value: age }
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter player's club/), {
      target: { value: club }
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter link to player's image/), {
      target: { value: playerImage }
    });
    fireEvent.click(addUserSubmitButton);
    await waitFor(() => {
      expect(screen.getByText(validationMessages.name.min)).toBeInTheDocument();
      expect(screen.getByText(validationMessages.nationality.min)).toBeInTheDocument();
      expect(screen.getByText(validationMessages.position.min)).toBeInTheDocument();
      expect(screen.getByText(validationMessages.age.min)).toBeInTheDocument();
      expect(screen.getByText(validationMessages.club.min)).toBeInTheDocument();
      expect(screen.getByText(validationMessages.playerImage.min)).toBeInTheDocument();
    });
  });
  it('displays messages about minimum length of entered text in inputs when user is authenticated and submitted form is filled with the valid data', async () => {
    renderWithThemeProvider(<AddUser />);

    const invalidMaxPlayerData = {
      name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate sed laborum explicabo',
      nationality:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate sed laborum explicabo',
      position: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate sed laborum explicabo',
      age: 101,
      club: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate sed laborum explicabo',
      playerImage:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate sed laborum explicabo Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate sed laborum explicabo Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate sed laborum explicabo Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate sed laborum explicabo Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate sed laborum explicabo'
    };

    const addUserSubmitButton = screen.getByTestId('submit-form');

    //   Fill out the form
    const { name, nationality, position, age, club, playerImage } = invalidMaxPlayerData;
    fireEvent.change(screen.getByPlaceholderText(/Enter player's name/), {
      target: { value: name }
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter player's nationality/), {
      target: { value: nationality }
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter player's position/), {
      target: { value: position }
    });
    fireEvent.change(screen.getByTestId('age'), {
      target: { value: age }
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter player's club/), {
      target: { value: club }
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter link to player's image/), {
      target: { value: playerImage }
    });
    fireEvent.click(addUserSubmitButton);
    await waitFor(() => {
      expect(screen.getByText(validationMessages.name.max)).toBeInTheDocument();
      expect(screen.getByText(validationMessages.nationality.max)).toBeInTheDocument();
      expect(screen.getByText(validationMessages.position.max)).toBeInTheDocument();
      expect(screen.getByText(validationMessages.age.max)).toBeInTheDocument();
      expect(screen.getByText(validationMessages.club.max)).toBeInTheDocument();
      expect(screen.getByText(validationMessages.playerImage.max)).toBeInTheDocument();
    });
  });
});
