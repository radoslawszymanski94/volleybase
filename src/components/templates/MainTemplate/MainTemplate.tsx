import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { StyledContentWrapper } from './MainTemplate.styles';
import { Footer } from 'components/molecules/Footer/Footer';
import Navigation from 'components/organisms/Navigation/Navigation';

export interface MainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  return (
    <Layout>
      <Navigation />
      <StyledContentWrapper>{children}</StyledContentWrapper>
      <Footer>VolleyBase ©2021 Created by Radosław Szymański</Footer>
    </Layout>
  );
};

export default MainTemplate;
