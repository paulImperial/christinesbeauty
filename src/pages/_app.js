import { StrictMode } from 'react';
import { ThemeProvider } from 'styled-components';
import App from 'next/app';
import theme from '../Theme/index';
import { GlobalStyle } from '../Theme/index';
import Head from 'next/head';

function Main({ Component, pageProps }) {
  return (
    <>
      <StrictMode>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="google-site-verification" content="SgYvArgqUJZC0MYpJ1LqvV_tVGss7rkYz8Gg_Gk6gHs" />
          </Head>
          <Component {...pageProps} />
        </ThemeProvider>
      </StrictMode>
    </>
  );
}

export default Main;
