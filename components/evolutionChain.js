import style from '../styles/components/evolutionChain.module.scss';
import DetailsLayout from './layouts/detailsLayout';
import PokemonEvolCard from './pokemonEvolCard';

export default function EvolutionChain({ order }) {
  const evolveSpan = order.length === 1? <span className={style.span}>This Pokémon does not evolve.</span> : "";
  return (
    <DetailsLayout evolDetails={true}>
      <h1>Evolutions: {evolveSpan}</h1>
      <div className={style.faseBase}>
        <PokemonEvolCard 
            pokemonData = {order[0]}
            size = "big"
            isBase = {true}
            key = {`${order[0].name}_pokeEvolCard`}
          />
      </div>
        {
          order.length > 1? nextEvolution(order[1]): ""
        }
    </DetailsLayout>
    );
}

function nextEvolution(data) {
  const pokemonList = data.filter(element => element.name !== undefined)
  const arrayList = data.filter(element => element.name === undefined)
  let evolutionList = [];
  function buildEvolutionList(list) {
    list.forEach(element => {
      if (element.name !== undefined) {
        evolutionList.push(element)
      } else {
        buildEvolutionList(element);
      }
      
    });
  }
  buildEvolutionList(arrayList);
  const classExt = pokemonList.length === 1? "Single" : (
    pokemonList.length === 2? "Double" : "Multiple"
    );
    console.log(evolutionList)
  return (
    <>
      <div className={style.arrow}><div></div></div>
      <div className={style[`fase${classExt}`]}>
        {
          pokemonList.map((pokemon, index) => {
            return (
              <PokemonEvolCard 
                pokemonData = {pokemon}
                size = "big"
                order= {index}
                key = {`${pokemon.name}_pokeEvolCard`}
                />
            )
          })
        }
      </div>

        {
          evolutionList.length > 0? nextEvolution(evolutionList): ""
        }
    </>
    );
 
}