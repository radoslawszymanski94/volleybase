import React from 'react';
import styled from 'styled-components';
import { Label } from 'components/atoms/Label/Label.styles';
import { Input } from 'components/atoms/Input/Input';

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: 0.3fr 0.7fr;
  text-align: center;

  & Input {
    margin-top: 10px;
    height: 40px;
  }
`;

export interface LabeledInputProps {
  label?: string;
  placeholder?: string;
  isRounded?: boolean;
}

const LabeledInput: React.FC<LabeledInputProps> = ({ label, placeholder }, props) => {
  return (
    <StyledWrapper>
      <Label>{label}</Label>
      <Input placeholder={placeholder} {...props} />
    </StyledWrapper>
  );
};

export default LabeledInput;
