import React from 'react';
import { StyledInput } from './Input.styles';

export interface InputProps {
  isRounded?: boolean;
  // onChange?: React.ChangeEvent<HTMLInputElement>
}

export const Input: React.FC<InputProps> = (props) => {
  return <StyledInput {...props}>{props.children}</StyledInput>;
};
