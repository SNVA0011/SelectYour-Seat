import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import '../styles/style.css'
import React from "react"; 

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head><meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale = 1.0, user-scalable = no" /></Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
