import React from 'react';
import { StyledPlayerInfoItem, StyledPlayerInfoLabel, StyledPlayerInfoValue } from './PlayerInfoItem.styles';

export interface PlayerInfoItemProps {
  label: string;
  value: string;
}

export const PlayerInfoItem: React.FC<PlayerInfoItemProps> = (props) => {
  return (
    <StyledPlayerInfoItem {...props}>
      <StyledPlayerInfoLabel>{props.label}</StyledPlayerInfoLabel>
      <StyledPlayerInfoValue>{props.value}</StyledPlayerInfoValue>
    </StyledPlayerInfoItem>
  );
};
