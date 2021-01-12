import '../styles/global.css'
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="pokedex"
          content="Project with pokemon"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}