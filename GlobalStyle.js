import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    font-family: 'Roboto', sans-serif;
    border: 5px solid black;
    max-width: 376px;
    max-height: 667px;
    padding 2vw;
  }
`;

export default GlobalStyle;
