import Head from 'next/head';
import styles from '../styles/components/pokemonLayout.module.scss';

export default function PokemonLayout(props) {
  return (
    <div className={styles[props.type]}>
      <Head>
        <title>{props.name} | Pokedex</title>
      </Head>
      <>{props.children}</>
    </div>
  )
}
