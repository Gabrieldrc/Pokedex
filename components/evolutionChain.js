import style from '../styles/components/evolutionChain.module.scss';

export default function EvolutionChain({ data }) {
  console.log(data);
  const allChains = [];
  // function buildTheChain(dataObject) {
  console.log(data.evolves_to.length);
  if (data.evolves_to.length === 0) {
    allChains.push([pokemonComponent(data)]);
  } else {
    data.evolves_to.forEach(pokemon2 => {
      if (pokemon2.evolves_to.length === 0 ) {
        allChains.push([
          pokemonComponent(data),
          pokemonComponent(pokemon2)
        ]);
      } else {
        pokemon2.evolves_to.forEach(pokemon3 => {
            allChains.push([
              pokemonComponent(data),
              pokemonComponent(pokemon2),
              pokemonComponent(pokemon3)
            ]);
        });
      }
    });
  }
  // }
  function pokemonComponent(pokemon) {
    return (
      <div key={`${pokemon.name}_cmp`}>
        <h2>{pokemon.name}</h2>
      </div>
    );
  }
  function putAChainIntoAContainer(chain) {
    return (
      <div>
        {chain}
      </div>
    );
  }
  console.log(allChains);  
  return (
    <div className={style.container}>
      pala
      <div>
        {allChains}
      </div>
    </div>
  );
}