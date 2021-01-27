import { useRouter } from 'next/router';
import { getPokemon } from '../../../lib/pokedex.api';
import Layout from '../../../components/layout';

import PokemonDetails from '../../../components/pokemonDetails';

function PokemonNumber({ pokemonData }) {
  const router = useRouter();
  const { number } = router.query;
  if (router.isFallback) {
    return <Layout>...</Layout>
  }
  return(
    <PokemonDetails number={number} pokemonData={pokemonData}/>
  );
}

export async function getStaticPaths() {
  return { paths: [], fallback: true, };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const { number } = params;
  const pokemonData = await getPokemon(parseInt(number));
  return {
    props: { 
      pokemonData,
    }
  };
}

export default PokemonNumber;