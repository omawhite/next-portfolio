// docs https://nextjs.org/docs/advanced-features/custom-app
// next uses the app component to initalize all pages

import Head from 'next/head';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
