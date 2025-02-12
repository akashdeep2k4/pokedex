import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Pokemon Solid";
    src: url("../src/assets/fonts/PokemonSolid.woff2") format("woff2"),
         url("../src/assets/fonts/PokemonSolid.ttf") format("truetype");
  }
  @font-face {
    font-family: "Fredoka One";
    src: url("../src/assets/fonts/FredokaOne-Regular.woff2") format("woff2"),
         url("../src/assets/fonts/FredokaOne-Regular.ttf") format("truetype");
  }
  @font-face {
    font-family: "Montserrat";
    src: url("../src/assets/fonts/Montserrat-Regular.woff2") format("woff2"),
         url("../src/assets/fonts/Montserrat-Regular.ttf") format("truetype");
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-size: 1rem;
    line-height: 1.6;
    font-family: ${theme.fonts.body}; 
    background-color: ${theme.colors.gray};
    color: black;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  button {
    cursor: pointer;
    background-color: transparent;
  }
`;

export default GlobalStyle;
