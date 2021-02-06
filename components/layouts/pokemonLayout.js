import Head from 'next/head';
import styles from '../../styles/components/pokemonLayout.module.scss';

export default function PokemonLayout(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{props.name} | Pokédex</title>
      </Head>
      <>{props.children}</>
    </div>
  )
}
