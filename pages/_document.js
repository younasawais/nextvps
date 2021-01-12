import Document, { Html, Head, Main, NextScript } from 'next/document';

import { GA_TRACKING_ID } from '../lib/gtag';

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
            <script 
              data-ad-client="ca-pub-1428354267201878" 
              async 
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
              }}
            />
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