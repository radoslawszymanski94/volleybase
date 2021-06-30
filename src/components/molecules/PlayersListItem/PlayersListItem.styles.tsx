import styled from 'styled-components';

const centeredFlex = `
display: grid;
  justify-content: center;
  align-items: center;
`;

export const StyledPlayersListItem = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.1fr 0.2fr 0.2fr;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSizes.l};
  border-bottom: 3px solid ${({ theme }) => theme.colors.lightGray};
  text-align: center;
  width: 500px;
  cursor: pointer;
  transition: background-color 0.4s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export const StyledParagraph = styled.p`
  ${centeredFlex}
`;

export const StyledPlayerNationality = styled.div`
  ${centeredFlex}

  img {
    width: 40px;
    height: 80%;
  }
`;

export const StyledSelectedIcon = styled.div`
  ${centeredFlex}

  img {
    width: 30px;
    height: 30px;
  }
`;
