import "../styles/tailwind.css";
import "tailwindcss/tailwind.css";
import React, { Fragment } from "react";

import App from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  //---------------------
  //  RENDER
  //---------------------
  return (
    <Fragment>
      <Head>
        <title>Web Container</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/icons/core/layouts/kmutt_logo.svg"></link>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default appWithTranslation(MyApp);
