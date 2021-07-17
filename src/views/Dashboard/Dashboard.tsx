import Player from 'components/organisms/Player/Player';
import Search from 'components/organisms/Search/Search';
import SearchList from 'components/organisms/SearchList/SearchList';
import React from 'react';
import { StyledDashboard, StyledSearchWrapper } from './Dashboard.styles';

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
        playerImg="https://dl.siatkarskaliga.pl/294106/inline/scalecrop=400x800/82f504/12-kurek.png"
      />
      <StyledSearchWrapper>
        <Search />
        <SearchList />
      </StyledSearchWrapper>
    </StyledDashboard>
  );
};

export default Dashboard;
