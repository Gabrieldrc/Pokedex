import Link from 'next/link';
import styles from '../styles/gridPokemon.module.css';
import { getPokemonImageDetailSrc } from '../lib/pokemon_images.sevices';
import { getPokemon } from '../lib/pokedex.api';

const pokemonLink = "/pokedex/pokemon/";

export default function GridPokemon({ number }) {
  const pokemonData = getPokemon(number);
  let numberString;
  if (number.toString().length == 1) {
    numberString = '00' + number;
  } else if (number.toString().length == 2) {
    numberString = '0' + number;
  } else {
    numberString = number.toString();
  }


  console.log(pokemonData);
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