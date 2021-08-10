import React, { FC } from 'react';
import { defaultPlayerImage } from 'assets/constans';
import { StyledPlayerInfoCard, StyledPlayerInfo, StyledMeta, StyledPlayerImage } from './Player.styles';

export interface PlayerProps {
  playerImage?: string;
  name?: string;
  nationality?: string;
  position?: string;
  age?: number;
  club?: string;
  theme?: Object;
}

const Player: FC<PlayerProps> = ({ playerImage, name, nationality, position, age, club }) => {
  return (
    <StyledPlayerInfoCard hoverable bordered={false} title="Player info">
      <StyledPlayerImage img={playerImage !== null ? playerImage : defaultPlayerImage} data-testid="playerImage" />
      <StyledPlayerInfo>
        <StyledMeta title={name} description="Name" />
        <StyledMeta title={nationality} description="Nationality" />
        <StyledMeta title={position} description="Position" />
        <StyledMeta title={age} description="Age" />
        <StyledMeta title={club} description="Club" />
      </StyledPlayerInfo>
    </StyledPlayerInfoCard>
  );
};

export default Player;
