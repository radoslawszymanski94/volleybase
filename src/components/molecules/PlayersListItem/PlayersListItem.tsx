import React from 'react';
import {
  StyledPlayersListItem,
  StyledParagraph,
  StyledPlayerNationality,
  StyledSelectedIcon
} from './PlayersListItem.styles';
import { activeIcon } from 'assets/images/base64icons';

export interface PlayersListItemProps {
  name: string;
  position: string;
  nationality: string;
  isSelected?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const PlayersListItem: React.FC<PlayersListItemProps> = ({ name, position, nationality, isSelected }, props) => {
  return (
    <StyledPlayersListItem {...props}>
      <StyledParagraph>{name}</StyledParagraph>
      <StyledParagraph>{position}</StyledParagraph>
      <StyledPlayerNationality>
        <img src={nationality} alt="Flag" />
      </StyledPlayerNationality>
      {isSelected ? (
        <StyledSelectedIcon>
          <img src={activeIcon} alt="Active icon" />
        </StyledSelectedIcon>
      ) : null}
    </StyledPlayersListItem>
  );
};
