import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');


    *, *::before, *::after {
        box-sizing: border-box;
        padding: 0; 
        margin: 0;
    }

    body {
        font-family: "Montserrat", sans-serif;
    }
`;
