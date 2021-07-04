import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import { StyledWrapper, StyledContentWrapper } from './MainTemplate.styles';

export interface MainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  return (
    <StyledWrapper>
      <Navigation />
      <StyledContentWrapper>{children}</StyledContentWrapper>
    </StyledWrapper>
  );
};

export default MainTemplate;
