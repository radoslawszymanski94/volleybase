import styled from 'styled-components';
import { PlayerInfoItemProps } from './PlayerInfoItem';

const evenParagraphs = `
  width: 50%;
  text-transform: capitalize;
`;

export const StyledPlayerInfoItem = styled.div`
  display: flex;
  min-width: 200px;
  border-top: 3px solid ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.colors.l};
  text-align: center;
  padding: 8px 0;
  height: auto;
`;

export const StyledPlayerInfoLabel = styled.p`
  ${evenParagraphs}
  font-weight: bold;
`;

export const StyledPlayerInfoValue = styled.p`
  ${evenParagraphs}
`;
