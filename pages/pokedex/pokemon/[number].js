import { useRouter } from 'next/router'
import { capitalize } from '../../../lib/functions'
import { getPokemon } from '../../../lib/pokedex.api'

function PokemonNumber({ pokemonData }) {
  const router = useRouter();
  const { number } = router.query;
  if (router.isFallback) {
    return <>...</>
  }
  console.log(pokemonData)
  return(
    <>
      {capitalize(pokemonData.name)}
    </>
  );
}

export async function getStaticPaths() {
  return { paths: [], fallback: true, }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const { number } = params
  const pokemonData = await getPokemon(parseInt(number))

  return {
    props: { 
      pokemonData,
    }
  }
}

export default PokemonNumber