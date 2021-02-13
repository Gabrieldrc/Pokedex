import { basicPokemonDataCS, basicPokemonDataFilter } from '../lib/pokedex.api';
import style from '../styles/components/pokemonEvolCard.module.scss';
import { capitalize, pokemonIdToString, cleanUnderscore } from '../lib/functions';
import Link from 'next/link';

export default function pokemonEvolCard({ pokemonData, size = "big", isBase = false }) {
  const { data, isLoading, isError } = basicPokemonDataCS(pokemonData.name);
  if (isLoading) {
    return(<div>cargandisimo</div>);
  }
  if (isError) {
    return(<div>ERROR</div>);
  }
  const pokemon = basicPokemonDataFilter(data.data);
  return(
    <div className={style[`${size}Container${isBase? "Base" : ""}`]}>
      <div className={style.pokemonContainer} >
        {(function evolve() {
          if (!isBase) {
            return evolDetails(pokemonData.evolution_details);
          }
        })()}
        <Link href={`/pokedex/pokemon/${pokemonIdToString(pokemon.id)}`}>
          <a><img src={pokemon.imgUrl} alt={`${pokemon.name}_evol`}/></a>
        </Link>
        <h2>{capitalize(pokemon.name)} <span>#{pokemonIdToString(pokemon.id)}</span></h2>
      </div>
    </div>
  );
}

function evolDetails(details) {
  let evolKey, evolValue;
  for (const key in details) {
    if (Object.hasOwnProperty.call(details, key)) {
      if (key === "trigger") break;
      if (details[key] !== null && details[key] !== false && details[key] !== "") {
        evolKey = key;
        if (Object.hasOwnProperty.call(details[key], "name")) {
          evolValue = details[key].name;
        } else {
          evolValue = details[key];
        }
        break;
      }
    }
  }
  return (
    <div className={style.evolveDetails}>
      <div className={style.key}>{cleanUnderscore(evolKey)}:</div>
      <div>{evolValue}</div>
    </div>
  );
}