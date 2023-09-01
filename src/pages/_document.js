import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap'
          rel='stylesheet'
        />
        <link rel='icon' href='/images/apple-touch-icon.png' sizes='any' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
