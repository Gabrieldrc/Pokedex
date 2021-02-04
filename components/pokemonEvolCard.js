import { basicPokemonDataCS, basicPokemonDataFilter } from '../lib/pokedex.api';
import style from '../styles/components/pokemonEvolCard.module.scss';

export default function pokemonEvolCard({ pokemonName, position }) {
  const { data, isLoading, isError } = basicPokemonDataCS(pokemonName);
  if (isLoading) {
    return(<div>cargandisimo</div>);
  }
  if (isError) {
    return(<div>ERROR</div>);
  }

  const pokemon = basicPokemonDataFilter(data.data);
  return(
    <div className={style[`pokemon${position}`]}>
      <img src={pokemon.imgUrl} alt={`${pokemon.name}_evol`}/>
      {pokemon.name}
    </div>
  );
}