import React from 'react';
import styled from 'styled-components';

export interface LabelProps {
  children?: string;
  theme?: Object;
  isBig?: boolean;
}

export const Label = styled.h1<LabelProps>`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme, isBig }) => (isBig ? theme.fontSizes.l : theme.fontSizes.m)};
  font-weight: 400;
  margin-bottom: 10px;
`;
