import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Pokemon Solid";
    src: url("/fonts/PokemonSolid.woff2") format("woff2"),
         url("/fonts/PokemonSolid.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Fredoka One";
    src: url("/fonts/FredokaOne-Regular.woff2") format("woff2"),
         url("/fonts/FredokaOne-Regular.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Montserrat";
    src: url("/fonts/Montserrat-Regular.woff2") format("woff2"),
         url("/fonts/Montserrat-Regular.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
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
    width: 100%;
    font-size: 1rem;
    line-height: 1.6;
    font-family: ${theme.fonts.body}; 
    background-color: ${theme.colors.gray};
    color: ${theme.colors.dark};
  }

  section {
    max-width: 1280px;
    min-height: 100vh;
    margin: 0 auto;
    background-color: white;
    padding: ${theme.sizes.clamp24};
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
