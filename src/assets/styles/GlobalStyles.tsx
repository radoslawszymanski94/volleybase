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
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    }

    .ant-input-search > .ant-input-group > .ant-input-group-addon:last-child .ant-input-search-button {
        border-radius: 0 10px 10px 0;
    }

    .ant-layout {
        min-height: 100vh;

        .ant-table table{

            border-radius: 20px;
    }
    }

    
`;
