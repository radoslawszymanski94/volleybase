import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    *, *::before, *::after {
        box-sizing: border-box;
        padding: 0; 
        margin: 0;
    }

    #root {
        height:100%;
        font-family: 'Montserrat', sans-serif;
    }

    .ant-pagination {
        display: flex;
        justify-content: center;
    }

    .ant-card-body .ant-input-search .ant-input-group .ant-input-affix-wrapper {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    }

    .ant-input-search > .ant-input-group > .ant-input-group-addon:last-child .ant-input-search-button {
        border-radius: 0 5px 5px 0;
    }

    .ant-layout {
        min-height: 100vh;

        .ant-table table {

            border-radius: 20px;
        }
    }

    .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-active::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-active::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-open::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-open::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected::after {
        border-bottom: none;
        color: transparent;
    }

    .ant-btn {
        &:focus {
            background-color: #54abaf;
            color: #fff;
        }
    }

    .ant-menu-submenu-popup > .ant-menu {
        background-color: #4F555C;
        color: #fff;
        text-align: center;
        font-weight: bold;
        height: 100%;

        .ant-menu-item-selected {
            background-color: transparent;
        }

        .logo a{
            display: block;
            width: 100%;
            height: 20px;
            color: #fff;
        }
    }

    .ant-menu-item-selected a {
        color: #fff;

        &:hover {
            color: #fff;
        }
    }
`;
