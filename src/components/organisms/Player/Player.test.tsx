import React from 'react';
import Player from './Player';
import { screen, waitFor } from '@testing-library/react';
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider';

describe('Player component', () => {
  const playerData = {
    name: 'John Dane',
    nationality: 'Poland',
    position: 'Outside hitter',
    age: 32,
    club: 'Zaksa Kędzierzyn Koźle',
    playerImage: 'https://dl.siatkarskaliga.pl/294106/inline/xy=1200x1200/210b0b/12-kurek.png'
  };

  beforeEach(async () => {
    const { name, nationality, position, age, club, playerImage } = playerData;
    await waitFor(() =>
      renderWithThemeProvider(
        <Player
          name={name}
          nationality={nationality}
          position={position}
          age={age}
          club={club}
          playerImage={playerImage}
        />
      )
    );
  });

  it('renders title', () => {
    expect(screen.getByText(/Player info/)).toBeInTheDocument();
  });
  it('renders player info', () => {
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('John Dane')).toBeInTheDocument();
    expect(screen.getByText('Nationality')).toBeInTheDocument();
    expect(screen.getByText('Poland')).toBeInTheDocument();
    expect(screen.getByText('Position')).toBeInTheDocument();
    expect(screen.getByText('Outside hitter')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
    expect(screen.getByText('32')).toBeInTheDocument();
    expect(screen.getByText('Club')).toBeInTheDocument();
    expect(screen.getByText('Zaksa Kędzierzyn Koźle')).toBeInTheDocument();
  });
  it('renders player image', () => {
    const playerImage = screen.getByTestId('playerImage');
    expect(playerImage).toHaveStyle(
      "background-image: url('https://dl.siatkarskaliga.pl/294106/inline/xy=1200x1200/210b0b/12-kurek.png')"
    );
  });
});
