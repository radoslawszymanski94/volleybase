import React from 'react';
import PlayerImage from 'components/atoms/PlayerImage/PlayerImage';
import { Title } from 'components/atoms/Title/Title.styles';
import { RoundedWrapper } from 'components/atoms/Wrapper/Wrapper.styles';
import { playerImage } from 'assets/images/base64icons';
import { StyledWrapper } from './PlayerInfo.styles';
import { PlayerInfoList } from '../PlayerInfoList/PlayerInfoList';

export const PlayerInfo: React.FC = () => {
  return (
    <StyledWrapper>
      <Title isBig>Player info</Title>
      <RoundedWrapper>
        <PlayerImage src={playerImage} />
        <PlayerInfoList />
      </RoundedWrapper>
    </StyledWrapper>
  );
};
