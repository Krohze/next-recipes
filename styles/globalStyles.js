import { createGlobalStyle } from "styled-components";

export const theme = {
  color: {
    main: "#158479",
    light: "#e9fcfa",
    dark: "#0e5850",
    contrast: "#ffcc33",
  },
};

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
`;
