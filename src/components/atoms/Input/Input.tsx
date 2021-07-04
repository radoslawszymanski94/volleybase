import React from 'react';
import { StyledInput } from './Input.styles';

export interface InputProps {
  isRounded?: boolean;
  theme?: Object;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = (props) => {
  return <StyledInput {...props} type="text" />;
};
