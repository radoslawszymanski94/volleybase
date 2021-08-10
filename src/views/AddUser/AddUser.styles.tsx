import styled from 'styled-components';
import { StyledPlayerInfoCard } from 'components/organisms/Player/Player.styles';
import { device } from 'assets/mobile/breakpoints';

export const StyledForm = styled(StyledPlayerInfoCard)`
  display: block;
  width: 100%;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
  }

  input {
    margin: 20px 0;
  }

  button {
    background-color: ${({ theme }) => theme.colors.mint};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    outline: none;
    text-transform: uppercase;
    font-weight: 500;
    border-radius: 5px;
    margin: 20px 0;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.mintHover};
      color: ${({ theme }) => theme.colors.white};
    }
  }

  @media ${device.tablet} {
    max-width: 60%;
  }

  @media ${device.laptop} {
    max-width: 50%;
  }
`;
