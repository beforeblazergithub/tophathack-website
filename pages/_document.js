import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <meta name="theme-color" content="#6a2bd9" />
        <meta name="color-scheme" content="light only" />
        <link rel="icon" src="https://tophathack.com/icon.png"/>
        <title>TopHatHack - Turn invisible on all TopHat tests.</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}