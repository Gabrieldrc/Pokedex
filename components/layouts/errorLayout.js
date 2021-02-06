import Head from 'next/head';
import style from '../../styles/components/errorLayout.module.scss';

export default function ErrorLayout({ children, errorCode }) {
  return(
    <div className={style.container}>
      <Head>
        <title>404: Page not found|Pokédex</title>
      </Head>
      <img 
        className={style.pokebalBackground}
        src="/images/pokeball_white_bg.png"
        alt="white_pokeball_background"
        />
      <div className={style.card}>
        <div className={style.title}>Error: {errorCode}</div>
        {children}
        <a href="/pokedex">Back to the Pokédex</a>
      </div>
    </div>
  );
}