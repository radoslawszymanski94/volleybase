import styled from 'styled-components';
import { Layout } from 'antd';
const { Header } = Layout;
import { NavigationProps } from './Navigation';

export const StyledHeader = styled(Header)<NavigationProps>`
  background-color: ${({ theme }) => theme.colors.darkGray};

  .ant-menu {
    background-color: ${({ theme }) => theme.colors.darkGray};
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes.m};
    display: flex;

    .ant-menu-item-selected {
      border-bottom: none;
    }

    .ant-menu-item {
      a {
        color: #fff;
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.hoverGray};
      }

      .active {
        border-bottom: 2px solid ${({ theme }) => theme.colors.mint};
      }
    }

    .logo {
      margin-left: auto;
      padding-right: 20px;

      button,
      a {
        background-color: ${({ theme }) => theme.colors.mint};
        color: ${({ theme }) => theme.colors.white};
        border: none;
        outline: none;
        text-transform: uppercase;
        border-radius: 5px;
        padding: 5px 12px;
        transition: background-color 0.3s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.mintHover};
        }
      }
    }
  }
`;

export const StyledButtonWrapper = styled.div`
  order: 100;
`;
