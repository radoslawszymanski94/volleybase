import styled from 'styled-components';
import { device } from 'assets/mobile/breakpoints';

export const StyledDashboard = styled.div`
  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 0.55fr 0.45fr;
    grid-column-gap: 40px;
  }
`;

export const StyledSearchWrapper = styled.div`
  height: 100%;
  margin-top: 40px;

  @media ${device.laptop} {
    display: grid;
    grid-row-gap: 40px;
    margin-top: 0;
  }
`;
