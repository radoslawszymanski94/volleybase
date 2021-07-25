import styled from 'styled-components';
import { InputProps } from './Input';

export const StyledInput = styled.input<InputProps>`
  background-color: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.gray};
  padding: 10px 15px;
  border: none;
  border-radius: ${({ isRounded }) => (isRounded ? '10px' : '0px')};
`;
