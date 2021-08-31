import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --background: #2f2c33;
    --text: #FFF;
    --button-background: #c24200;
    --joystick-buttons: #ddd;
    --joystick-text: #000;
    --input: #444;
    --orange-text: #fb8d01
    ;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background-color: var(--background);
    font-family: 'Press Start 2P', cursive;
    width: 100vw;
    height: 100vh;
  }
`;

export default GlobalStyle;
