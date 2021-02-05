import { basicPokemonDataCS, basicPokemonDataFilter } from '../lib/pokedex.api';
import style from '../styles/components/pokemonEvolCard.module.scss';
import { capitalize, pokemonIdToString, cleanUnderscore } from '../lib/functions';

export default function pokemonEvolCard({ pokemonData, position, size }) {
  const { data, isLoading, isError } = basicPokemonDataCS(pokemonData.name);
  if (isLoading) {
    return(<div>cargandisimo</div>);
  }
  if (isError) {
    return(<div>ERROR</div>);
  }

  const pokemon = basicPokemonDataFilter(data.data);
  return(
    <div className={style[`${size}Container`]}>
      {(function arrow() {
        let order;
        if (position.position === 1 || !position.arrow) {
          return;
        }
        if (position.arrow) {
          order = 4;
        } else {
          order = 1;
        }
        return <div className={style.arrow} style={{order: order}}><div></div></div>
      })()}

      {(function evolve() {
        if (position.position !== 0) {
          return evolDetails(pokemonData.evolution_details);
        }
      })()}

      <div className={style.pokemonContainer} style={{order: "3"}}>
        <img src={pokemon.imgUrl} alt={`${pokemon.name}_evol`}/>
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
    <div className={style.evolveDetails}  style={{order: "2"}}>
      <div className={style.key}>{cleanUnderscore(evolKey)}:</div>
      <div>{evolValue}</div>
    </div>
  );
}