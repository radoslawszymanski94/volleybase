import styled from 'styled-components';

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundGray};
  height: 100vh;
`;

export const StyledContentWrapper = styled.div`
  padding: 0 50px;
  width: 80%;
  margin: 0 auto;
`;
