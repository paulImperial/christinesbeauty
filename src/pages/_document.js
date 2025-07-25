import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MainDocument extends Document {
  static async getInitialProps(ctx) {
    // Render CSS on the server to prevent FOUC.
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <link rel="stylesheet" type="text/css" href="//cdn.curator.io/3.1/css/curator.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script type="text/javascript" src="//cdn.curator.io/3.1/js/curator.js"></script>
          <script type="text/javascript" src="https://apps.elfsight.com/p/platform.js"></script>
        </body>
      </Html>
    );
  }
}

export default MainDocument;
