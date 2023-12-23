import "@/styles/globals.css";

import Head from "next/head";

import MainContainer from "@/components/MainContainer";

export default function App({ Component, pageProps }) {
  return (
    <MainContainer>
      <Head>
        <title>Aprendendo next</title>
      </Head>
      <Component {...pageProps} />
    </MainContainer>
  );
}
