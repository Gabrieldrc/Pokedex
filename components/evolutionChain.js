import style from '../styles/components/evolutionChain.module.scss';

export default function EvolutionChain({ order, data }) {
  function renderEvolution(order) {
    // contador+=1
    console.log(data);
    let pokeComponent = [];
    (function goThroughList(list, position) {
      console.log(typeof position)
      list.forEach(pokemon => {
        if (typeof pokemon === 'string') {
          pokeComponent.push(
              pokemonComponent(pokemon, position, data[position])
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

// var contador = 0;

function pokemonComponent(name, fase, details) {
  console.log(details)
  return (
    <div className={style[`pokemon${fase}`]} key={`${name}_cmp`}>
      {/* <img src={pokemon.imgUrl} alt={`${name}_ev`}/> */}
      <h2>{name}</h2>
    </div>
  );
}