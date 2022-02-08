import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "../styles/globalStyles.js";
import { Layout } from "../components";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
