import '../styles/globalStyle.ts';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyle } from '../styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ZUGI - 강주혁</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
