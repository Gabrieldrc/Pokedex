import style from '../styles/components/evolutionChain.module.scss';
import PokemonEvolCard from './pokemonEvolCard';

export default function EvolutionChain({ order }) {
  function renderEvolution(order) {
    let pokeComponent = [];
    (function goThroughList(list, position) {
      list.forEach(pokemon => {
        if (typeof pokemon === 'string') {
          pokeComponent.push(
              <PokemonEvolCard pokemonName={pokemon} position={position} key={`${pokemon}_${position}`}/>
            );
        } else {
          goThroughList(pokemon, position + 1);
        }
      });
    })(order, 0);
    return pokeComponent;
  }
  return (
    <div className={style.container}>
      {renderEvolution(order)}
    </div>
  );
}