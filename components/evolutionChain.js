import style from '../styles/components/evolutionChain.module.scss';
import DetailsLayout from './layouts/detailsLayout';
import PokemonEvolCard from './pokemonEvolCard';

export default function EvolutionChain({ order }) {
  return (
    <DetailsLayout evolDetails={true}>
      <h1>Evolutions: <span className={style.span}>This Pokémon does not evolve.</span></h1>
      <div className={style.layer1}>
        <PokemonEvolCard 
            pokemonData = {order[0]}
            size = "big"
            isBase = {true}
            key = {`${order[0].name}_pokeEvolCard`}
          />
        {
          order.length > 1? nextEvolution(order[1]): ""
        }
      </div>
    </DetailsLayout>
    );
}

function nextEvolution(data, time = 1) {
  const pokemon2 = data.filter(element => element.name !== undefined)
  const evolution2 = data.filter(element => element.name === undefined)
  const size = pokemon2.length === 1? "big": "medium";
  const lastLayer = time === 1 && pokemon2.length !== 1? "layer4" : "lastLayer";
  console.log(evolution2);
  return (
    <div className={style[`layer2`]}>
      <div className={style.arrow}><div></div></div>
      <div className={style[`layer3${pokemon2.length === 1? "Single" : (pokemon2.length === 2? "Double" : "Multiple")}`]}>
        {pokemon2.map((pokemon, index) => {
          return (
            <div className={style[`${lastLayer}`]}>
              <PokemonEvolCard 
                  pokemonData={pokemon}
                  size={size}
                  key = {`${pokemon.name}_pokeEvolCard`}
                />
                {evolution2[index] !== undefined? nextEvolution(evolution2[index], time + 1) : ""}
            </div>
          );
        })}
      </div>
    </div>
  );  
  
}