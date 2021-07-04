import React from 'react';
import { StyledPlayerInfoItem, StyledPlayerInfoLabel, StyledPlayerInfoValue } from './PlayerInfoItem.styles';

export interface PlayerInfoItemProps {
  label: string;
  value: string;
}

export const PlayerInfoItem: React.FC<PlayerInfoItemProps> = ({ label, value }) => {
  return (
    <StyledPlayerInfoItem>
      <StyledPlayerInfoLabel>{label}</StyledPlayerInfoLabel>
      <StyledPlayerInfoValue>{value}</StyledPlayerInfoValue>
    </StyledPlayerInfoItem>
  );
};
