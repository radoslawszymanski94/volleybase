import styled from 'styled-components';
import { StyledPlayerInfoCard } from 'components/organisms/Player/Player.styles';

export const StyledSearchCard = styled(StyledPlayerInfoCard)`
  display: flex;
  flex-direction: column;
  min-height: 0;

  input {
    width: 90%;
    margin: 0 auto;
  }
`;
