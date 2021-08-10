import styled from 'styled-components';
import { StyledPlayerInfoCard } from 'components/organisms/Player/Player.styles';
import { device } from 'assets/mobile/breakpoints';

export const StyledSearchListCard = styled(StyledPlayerInfoCard)`
  display: block;
  height: 450px;
  margin-top: 40px;

  .ant-card-body {
    padding-top: 15px;
    padding-bottom: 0;
  }

  .ant-table-wrapper {
    width: 100%;

    .ant-table-row {
      cursor: pointer;
    }
  }

  .ant-pagination {
    margin-top: 8px;
  }

  @media ${device.laptop} {
    margin-top: 0;
  }
`;
