import style from '../styles/components/evolutionChain.module.scss';
import DetailsLayout from './layouts/detailsLayout';
import PokemonEvolCard from './pokemonEvolCard';

export default function EvolutionChain({ order }) {
  let pokeComponent = [];
  (function goThroughList(list, position, size = "big") {
    list.forEach(pokemon => {
      if (pokemon.name) {
        if (typeof pokeComponent[position] === "undefined") {
          pokeComponent.push([]);
        }
        pokeComponent[position].push(
            <PokemonEvolCard 
              pokemonData = {pokemon}
              position = {{
                position: position,
                arrow: (position === 0 && list.length > 1),
              }}
              size = {size}
              key = {`${pokemon.name}_${position}`}
            />
          );
      } else {
        let newSize;
        if ( pokemon.filter(element => element.name).length >= 2) {
          newSize = "medium";
        } else {
          newSize = "big";
        }
        goThroughList(pokemon, position + 1, newSize);
      }
    });
  })(order, 0);
    
  return (
    <DetailsLayout evolDetails={true}>
      <h1>Evolutions: <span className={style.span}>{typeof pokeComponent[1] === "undefined"? "This Pokémon does not evolve.": ""}</span></h1>
      <div className={style.faseContainerBase}>{pokeComponent[0]}</div>
      {typeof pokeComponent[1] !== "undefined"? <div className={style.faseContainer}>{pokeComponent[1]}</div>: ""}
      {typeof pokeComponent[2] !== "undefined"? <div className={style.faseContainer}>{pokeComponent[2]}</div>: ""}
    </DetailsLayout>
  );
}