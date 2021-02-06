import Link from 'next/link';
import styles from '../styles/components/gridPokemon.module.scss';
import { getPokemonImageDetailSrc } from '../lib/pokemon_images.sevices';
import { pokemonIdToString } from '../lib/functions';

const pokemonLink = "/pokedex/pokemon/";

export default function GridPokemon({ number }) {
  let numberString = pokemonIdToString(number);

  return(
    <Link href={pokemonLink + numberString}>
    <a className={styles.container}>
      <div className={styles.background_image}>
      </div>
      <img className={styles.pokemon_image} src={getPokemonImageDetailSrc(numberString)}/>
      <div className={styles.number}>
        {numberString}
      </div>
    </a>
    </Link>
  );
}