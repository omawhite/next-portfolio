import { Html, Head, Main, NextScript } from 'next/document';

export const siteTitle = `Omar's blog`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="A site by Omar Louis White" />
        <meta name="keywords" content="" />
        <meta name="og:description" content="A blog by Omar Louis White" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:url" content="https://louiswhite.me" />
        <meta name="og:title" content={siteTitle} />
        <meta name="og:site_name" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}