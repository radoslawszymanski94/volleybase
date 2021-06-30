import React from 'react';
import { StyledButton } from './Button.styles';

export interface ButtonProps {
  children: string;
  isPrimary?: boolean;
  isBig?: boolean;
  isRounded?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};
