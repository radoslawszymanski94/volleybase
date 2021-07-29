import React, { FC } from 'react';
import { StyledInput } from './Input.styles';

export interface InputProps {
  isRounded?: boolean;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
  name: string;
  theme?: Object;
}

export const Input: FC<InputProps> = (props) => {
  return <StyledInput {...props} />;
};
