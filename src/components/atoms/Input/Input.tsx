import React from 'react';
import { StyledInput } from './Input.styles';

export interface InputProps {
  isRounded?: boolean;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
  name: string;
}

export const Input: React.FC<InputProps> = (props) => {
  return <StyledInput {...props} />;
};
