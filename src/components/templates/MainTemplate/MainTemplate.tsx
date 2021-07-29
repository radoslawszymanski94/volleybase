import React, { ReactNode, FC } from 'react';
import { Layout } from 'antd';
import { StyledContentWrapper } from './MainTemplate.styles';
import { Footer } from 'components/molecules/Footer/Footer';
import Navigation from 'components/organisms/Navigation/Navigation';
import { footerText } from 'assets/constans';

export interface MainTemplateProps {
  children: ReactNode;
}

const MainTemplate: FC<MainTemplateProps> = ({ children }) => {
  return (
    <Layout>
      <Navigation />
      <StyledContentWrapper>{children}</StyledContentWrapper>
      <Footer>{footerText}</Footer>
    </Layout>
  );
};

export default MainTemplate;
