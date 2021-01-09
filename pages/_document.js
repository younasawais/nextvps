import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            {/* <link href="/fonts/style.css" rel="stylesheet"/>*/}
            <link href="https://fonts.googleapis.com/css2?family=Audiowide&family=Bungee+Outline&display=swap" rel="stylesheet"/> 
            <link href="https://fonts.googleapis.com/css2?family=Saira+Condensed&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument