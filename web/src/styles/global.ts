import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    * { padding: 0;margin: 0;box-sizing: border-box; }
    body {
        color: #FFF;
        background: #ebf2f5;
    }

    body, input, button, textarea {
        font: 600 18px Nunito, sans-serif;
    }

`;
