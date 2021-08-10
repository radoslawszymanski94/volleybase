import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { Spin } from 'antd';
import Player, { PlayerProps } from 'components/organisms/Player/Player';
import Search from 'components/organisms/Search/Search';
import SearchList from 'components/organisms/SearchList/SearchList';
import { StyledDashboard, StyledSearchWrapper } from './Dashboard.styles';
import { baseURL } from 'api';

const Dashboard: FC = () => {
  const [players, setPlayers] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPlayer, setSelectedPlayer] = useState({});
  const [searchedPlayers, setSearchedPlayers] = useState<Array<PlayerProps>>();

  useEffect(() => {
    axios
      .get(`${baseURL}players.json`)
      .then((data) => setPlayers(Object.values(data.data)))
      .then(() => setSelectedPlayer(players[0]))
      .then(() => setLoading(false));
  }, [loading]);

  const searchPlayer = (event) => {
    if (players) {
      const searchedPlayers = players.filter((player) =>
        player.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setSearchedPlayers(searchedPlayers);
    }
  };

  return (
    <StyledDashboard>
      {!loading ? <Player {...selectedPlayer} /> : <Spin />}
      <StyledSearchWrapper>
        <Search search={searchPlayer} />
        <SearchList data={searchedPlayers ? searchedPlayers : players} selectedPlayerAction={setSelectedPlayer} />
      </StyledSearchWrapper>
    </StyledDashboard>
  );
};

export default Dashboard;
