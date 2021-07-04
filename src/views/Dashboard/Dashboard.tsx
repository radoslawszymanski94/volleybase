import React from 'react';
import { StyledWrapper } from './Dashboard.styles';
import { PlayerInfo } from 'components/organisms/PlayerInfo/PlayerInfo';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import styled from 'styled-components';
import { Title } from 'components/atoms/Title/Title.styles';
import { RoundedWrapper } from 'components/atoms/Wrapper/Wrapper.styles';

export const StyledPlayersListWrapper = styled.div`
  display: grid;
  grid-template-rows: 0.1fr 0.2fr 0.7fr;
  min-width: 400px;
  height: 100%;
  margin: 0 auto;
  padding: 15px 0;
`;

const Dashboard: React.FC = () => {
  return (
    <StyledWrapper>
      <PlayerInfo />
      <StyledPlayersListWrapper>
        <Title isBig>Find player</Title>
        <SearchBar />
        <RoundedWrapper />
      </StyledPlayersListWrapper>
    </StyledWrapper>
  );
};

export default Dashboard;
