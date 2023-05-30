import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Google Tag Manager */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-9CZ6C2BYVQ"></script>
          <script dangerouslySetInnerHTML={
            {
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-9CZ6C2BYVQ');
              `,
            }
          }>
          </script>

          <link rel="icon" href="/icons8-m-stickers-96.png" />


          {/* External Fonts */}
          <link href="//db.onlinewebfonts.com/c/875fffdfa62169a0f131e90f37f1faf4?family=Mazzard+H+Medium" rel="stylesheet" type="text/css"/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
