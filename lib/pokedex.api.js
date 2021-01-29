const pokeApi = require('pokedex-promise-v2');
const pokedex = new pokeApi();
export async function getPokemon(number) {
  var pokemonData;
  await pokedex.getPokemonByName(number, function(response, error) {
    if (!error) {
      pokemonData = response;
    } else {
      console.log(error);
      return {};
    }
  });
  return pokemonData;
}

export async function getEvolutionChainById(id) {
  var index;
  var evolutionData = [];
  await pokedex.getEvolutionChainById(id, function (response, error) {
    if (error) {
      console.log(error);
    }
    index = response.chain;
    var evolves = true;
    do {
      let id = getIdFromUrlString(index.species.url);
      evolutionData.push({name: index.species.name, id: id, imgUrl: addingImgUrl(id)});
      if (index.evolves_to.length > 0) {
        index = index.evolves_to[0];
      } else evolves = false;
    } while (evolves);
  });

  return evolutionData;
}

export async function getPokemonSpeciesByName(id) {
  var pokemonSpecieData
  await pokedex.getPokemonSpeciesByName(id, function( response, error) {
    if (error) {
      console.log(error);
      pokemonSpecieData = [];
    }
    pokemonSpecieData = response;
  })
  return pokemonSpecieData;
}

export async function getPokemonEvolutionChainId(pokemonNumber) {
  const speciesData = await getPokemonSpeciesByName(pokemonNumber);
  return getIdFromUrlString(speciesData.evolution_chain.url);
}

function getIdFromUrlString(url) {
  const id = url.slice(url.search(/\/\d\//g) +1, -1);
  console.log(id);
  return id;
}

export function addingImgUrl(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}