import { useRouter } from 'next/router';

import { getPokemon } from '../../../lib/pokedex.api';

export default function PokemonNumber() {
  const { number } = useRouter().query;
  return(
    <>
      {number}
    </>
  );
}