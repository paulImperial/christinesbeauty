import { StrictMode } from 'react';
import { ThemeProvider } from 'styled-components';
import App from 'next/app';
import theme from '../Theme/index';
import { GlobalStyle } from '../Theme/index';

class Main extends App {
  render() {
    const { Component, pageProps} = this.props;
    return (
      <StrictMode>
					<ThemeProvider theme={theme}>
					<GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
      </StrictMode>
    );
  }
}

export default Main;
