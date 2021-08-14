import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
    @font-face {
        font-family: 'CoFo Sans';
        src: local("CoFo Sans Bold"), local("CoFoSans-Bold"), url("fonts/CoFoSans-Bold.woff2") format("woff2"), url("fonts/CoFoSans-Bold.woff") format("woff");
        font-weight: bold;
        font-display: swap;
    }

    @font-face {
        font-family: 'CoFo Sans';
        src: local("CoFo Sans Black"), local("CoFoSans-Black"), url("fonts/CoFoSans-Black.woff2") format("woff2"), url("fonts/CoFoSans-Black.woff") format("woff");
        font-weight: 900;
        font-display: swap;
    }

    @font-face {
        font-family: 'CoFo Sans';
        src: local("CoFo Sans"), local("CoFoSans-Regular"), url("fonts/CoFoSans-Regular.woff2") format("woff2"), url("fonts/CoFoSans-Regular.woff") format("woff");
        font-weight: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'CoFo Sans';
        src: local("CoFo Sans Medium"), local("CoFoSans-Medium"), url("fonts/CoFoSans-Medium.woff2") format("woff2"), url("fonts/CoFoSans-Medium.woff") format("woff");
        font-weight: 500;
        font-display: swap;
    }

    :root {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    * {
        padding: 0;
        margin: 0;
        border: 0;
    }

    *, *::before, *::after {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    :focus, :active {
        outline: none;
    }

    a:focus, a:active {
        outline: none;
    }

    nav, footer, header, aside {
        display: block;
    }

    html, body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
        line-height: 1;
        font-size: 16px;
        font-family: "CoFo Sans", Arial, sans-serif;
        font-weight: 400;
        color: black;
        -ms-text-size-adjust: 100%;
        -moz-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
    }

    input, button, textarea, optgroup, select {
        font: inherit;
        cursor: pointer;
        margin: 0;
        padding: 0;
    }

    input:-ms-clear {
        display: none;
    }

    button::-moz-focus-inner {
        padding: 0;
        border: 0;
    }

    a, a:visited {
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }

    ul li {
        list-style: none;
    }

    img {
        vertical-align: top;
        max-width: 100%;
        height: auto;
    }

    h1, h2, h3, h4, h5, h6, p, ul, ol, figure, figcaption {
        font-size: inherit;
        font-weight: inherit;
        padding: 0;
        margin: 0;
    }

    .on {
        color: #45f754;
    }
    .own {
        align-self: flex-end;
        background-color: #c8e9fa;
        border-color: #034a72;
        color: #034a72;
    }
`;