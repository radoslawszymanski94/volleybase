import styled from 'styled-components';
import { StyledForm } from 'views/AddUser/AddUser.styles';
import { device } from 'assets/mobile/breakpoints';

export const StyledLoginForm = styled(StyledForm)`
  @media ${device.tablet} {
    width: 60%;
  }
  @media ${device.laptop} {
    width: 40%;
  }
`;

export const StyledParagraph = styled.p`
  text-align: center;
`;
