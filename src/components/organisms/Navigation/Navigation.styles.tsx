import styled from 'styled-components';
import { Layout, Menu, Button } from 'antd';
const { Header } = Layout;

export const StyledButtonWrapper = styled.div`
  align-self: flex-end;
`;

export const StyledHeader = styled(Header)`
  background-color: ${({ theme }) => theme.colors.darkGray};

  .ant-menu {
    background-color: ${({ theme }) => theme.colors.darkGray};
    text-transform: uppercase;
    font-weight: bold;

    .logo {
      margin-left: auto;
      padding-right: 20px;

      button {
        background-color: ${({ theme }) => theme.colors.mint};
        color: ${({ theme }) => theme.colors.white};
        border: none;
        outline: none;
      }
    }
  }

  .ant-menu-item {
    color: ${({ theme }) => theme.colors.white};
  }

  .ant-menu-item:hover {
    background-color: ${({ theme }) => theme.colors.hoverGray};
    color: ${({ theme }) => theme.colors.white};
  }

  .ant-menu-item-active {
    span {
      border-bottom: 3px solid ${({ theme }) => theme.colors.mint};
    }
  }
`;
