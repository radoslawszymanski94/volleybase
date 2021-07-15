import styled from 'styled-components';

const evenParagraphs = `
  width: 50%;
  text-transform: capitalize;
`;

export const StyledPlayerInfoItem = styled.div`
  display: flex;
  flex-grow: 1;
  border-top: 3px solid ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.l};
  text-align: center;
  padding: 8px 0;
`;

export const StyledPlayerInfoLabel = styled.p`
  ${evenParagraphs}
  font-weight: bold;
`;

export const StyledPlayerInfoValue = styled.p`
  ${evenParagraphs}
`;
