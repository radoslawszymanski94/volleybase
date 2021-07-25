import styled from 'styled-components';
import { Layout, Menu, Button } from 'antd';
const { Header } = Layout;

export const StyledButtonWrapper = styled.div`
  order: 100;
`;

export const StyledHeader = styled(Header)`
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

      button {
        background-color: ${({ theme }) => theme.colors.mint};
        color: ${({ theme }) => theme.colors.white};
        border: none;
        outline: none;
        text-transform: uppercase;
        font-weight: 500;
        border-radius: 5px;

        &:hover {
          background-color: ${({ theme }) => theme.colors.mintHover};
        }
      }
    }
  }
`;
