import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "../styles/globalStyles.js";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
