import styled from 'styled-components';

export const StyledPlayerInfoItem = styled.div`
  display: flex;
  border-top: 3px solid ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.colors.l};
  width: 500px;
  text-align: center;
  padding: 5px 0;
`;

export const StyledPlayerInfoLabel = styled.p`
  width: 50%;
  text-transform: capitalize;
  font-weight: bold;
`;

export const StyledPlayerInfoValue = styled.p`
  width: 50%;
  text-transform: capitalize;
`;
