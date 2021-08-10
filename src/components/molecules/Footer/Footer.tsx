import React, { FC } from 'react';
import { StyledFooter } from './Footer.styles';

export interface FooterProps {
  children: string;
}

export const Footer: FC<FooterProps> = (props) => {
  return <StyledFooter {...props}>{props.children}</StyledFooter>;
};
