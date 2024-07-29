import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #212226;
}

  #root {
    height: 100%;
  }
`;

export default GlobalStyle;
