import styled from 'styled-components';
import { Card } from 'antd';
import { PlayerProps } from './Player';
import { device } from 'assets/mobile/breakpoints';

const { Meta } = Card;

interface PlayerImageProps {
  img?: string;
}

export const StyledPlayerInfoCard = styled(Card)<PlayerProps>`
  display: grid;
  grid-template-rows: 0.1fr 0.9fr;
  border-radius: 20px;
  min-height: 800px;

  .ant-card-head {
    grid-column-start: 1;
    grid-column-end: 3;
    border-bottom: 2px solid ${({ theme }) => theme.colors.lightGray};
    border-radius: 20px 20px 0 0;
  }

  .ant-card-body {
    grid-column-start: 1;
    grid-column-end: 3;
    width: 100%;
    display: block;

    @media ${device.laptop} {
      padding: 15px 0;
      display: flex;
    }
  }

  .ant-card-meta-detail {
    width: 100%;
  }

  .ant-card-meta-description {
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.lightGray};
    border-radius: 20px 0 0 20px;
  }

  .ant-card-meta-title {
    font-weight: bold;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.darkGray};
  }

  .ant-card-head-title {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes.l};
    letter-spacing: 2px;
    color: ${({ theme }) => theme.colors.darkGray};
  }

  @media ${device.laptop} {
    min-height: 0;
  }
`;

export const StyledPlayerInfo = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    width: 40%;
  }
`;

export const StyledPlayerImage = styled.div<PlayerImageProps>`
  background-image: ${({ img }) => `url(${img})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom center;
  width: 100%;
  height: 40%;

  @media ${device.laptop} {
    width: 60%;
    height: 100%;
  }
`;

export const StyledMeta = styled(Meta)`
  height: 20%;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
