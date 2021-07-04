import React from 'react';
import styled from 'styled-components';

export interface LabelProps {
  children?: string;
  theme?: Object;
}

export const Label = styled.h1<LabelProps>`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.l};
`;
