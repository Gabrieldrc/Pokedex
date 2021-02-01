import { useRouter } from 'next/router';
import { 
  getPokemonAndSpecies,
  getResource,
  cleanEvolutionData
} from '../../../lib/pokedex.api';
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

// export async function getStaticPaths() {
//   return { paths: [], fallback: true, };
// }

// This also gets called at build time
export async function getServerSideProps({ params }) {
  const { number } = params;
  const [ pokemonData, species ] = await getPokemonAndSpecies(parseInt(number));
  const [ evolutionChainRaw ] = await getResource([species.evolution_chain.url]);
  const evolutionChain = await cleanEvolutionData(evolutionChainRaw);
  return {
    props: { 
      pokemonData: {
        height: pokemonData.height,
        id: pokemonData.id,
        name: pokemonData.name,
        imgUrl: pokemonData.sprites.other['official-artwork'].front_default,
        types: pokemonData.types,
        weight: pokemonData.weight,
        evolution_chain: evolutionChain,
      },
    }
  };
}

export default PokemonNumber;