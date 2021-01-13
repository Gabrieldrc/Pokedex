import Link from 'next/link';
import { getPokemonImageDetailSrc } from '../lib/pokemon_images.sevices';
const pokemonLink = "pokedex/pokemon/";

export default function gridPokemon(props) {
  const number = props.number;
  


  return(
    <Link href={pokemonLink + number}>
    <a>
      <img src={getPokemonImageDetailSrc(number)}/>
    </a>
    </Link>
  );
}