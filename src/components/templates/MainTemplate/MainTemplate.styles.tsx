import styled from 'styled-components';
import { Layout } from 'antd';
import { device } from 'assets/mobile/breakpoints';

const { Content } = Layout;

export const StyledContentWrapper = styled(Content)`
  padding: 20px;
  height: 100%;

  @media ${device.tablet} {
    padding: 50px;
  }
`;
