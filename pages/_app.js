// docs https://nextjs.org/docs/advanced-features/custom-app
// next uses the app component to initalize all pages

import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
