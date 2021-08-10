import styled from 'styled-components';
import { Layout } from 'antd';
import { FooterProps } from './Footer';

const { Footer } = Layout;

export const StyledFooter = styled(Footer)<FooterProps>`
  text-align: center;
`;
