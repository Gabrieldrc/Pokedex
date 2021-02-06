import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import '../styles/global.scss';
import '../styles/components/loadingpage.scss';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      const load = document.getElementById("loading_page_animation");
      load.style.display = "block";
      // console.log(
      //   `App is changing to ${url} ${
      //     shallow ? 'with' : 'without'
      //   } shallow routing`
      // )
    }

    const handleRouteComplete = (url, { shallow }) => {
      const load = document.getElementById("loading_page_animation");
      load.style.display = "none";
      // console.log(
      //   `App is changing to ${url} ${
      //     shallow ? 'with' : 'without'
      //   } shallow routing`
      // )
    }

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteComplete);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
     router.events.off('routeChangeComplete', handleRouteComplete);
    }
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="pokedex"
          content="Project with pokemon"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
      <div id="loading_page_animation" style={{display: "none"}}>
        loading...
        <img id="load_page_icon"
          src="/images/pokeball_icon.png"
        />
      </div>
    </>
  );
}