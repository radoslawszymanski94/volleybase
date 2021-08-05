import styled from 'styled-components';
import { ButtonProps } from './Button';

export const StyledButton = styled.button<ButtonProps>`
  width: ${({ isBig }) => (isBig ? '130px' : '90px')};
  height: 30px;
  padding: ${({ isBig }) => (isBig ? '8px 12px' : '6px 12px')};
  border-radius: ${({ isRounded }) => (isRounded ? '5px' : '0px')};
  background-color: ${({ theme, isPrimary }) => (isPrimary ? theme.colors.mint : theme.colors.darkGray)};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
`;
