import React, { FC } from 'react';
import { StyledButton } from './Button.styles';

export interface ButtonProps {
  children: string;
  isPrimary?: boolean;
  isBig?: boolean;
  isRounded?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  theme?: Object;
}

export const Button: FC<ButtonProps> = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};
