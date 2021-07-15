import Player from 'components/organisms/Player/Player';
import React from 'react';
import { StyledDashboard } from './Dashboard.styles';

const data = {
  name: 'Bartosz Kurek',
  nationality: 'Poland',
  position: 'Outside hitter',
  age: 32,
  club: 'Wolf Dogs Nagoya'
};

const Dashboard: React.FC = () => {
  const { name, nationality, position, age, club } = data;
  return (
    <StyledDashboard>
      <Player
        name={name}
        nationality={nationality}
        postition={position}
        age={age}
        club={club}
        img={'https://dl.siatkarskaliga.pl/294106/inline/scalecrop=400x800/82f504/12-kurek.png'}
      />
      <Player />
    </StyledDashboard>
  );
};

export default Dashboard;
