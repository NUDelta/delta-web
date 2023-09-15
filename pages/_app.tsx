import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Delta Lab</title>
        <meta
          name="google-site-verification"
          content="14ltX0knmJHA_JnO3Z428TX8YioIFSWFy1yABn_Qh10"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic&display=swap"
          rel="stylesheet"
          type="text/css"
        />

        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>

      <main className="bg-white pb-8">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;