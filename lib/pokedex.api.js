const pokeApi = require('pokedex-promise-v2');
const pokedex = new pokeApi();
const pokeApiUrl = 'api/v2/';

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

export async function getPokemonAndSpecies(number) {
  var result;
  await pokedex.resource([
    `${pokeApiUrl}pokemon/${number}`,
    `${pokeApiUrl}pokemon-species/${number}`,
  ], function(response, error) {
    result = response;
  });
  return result;
}

export async function getResource(links) {
  var result = [];
  await pokedex.resource(links, function( response, error) {
    if (error) {
      console.log(error);
      return;
    }
    result = response;
  });
  return result;
}

export async function cleanEvolutionData(dataObject) {
  var index = dataObject.chain;
  var evolutionData = [];
  var evolves = true;
  do {
    let pokemon = await getPokemon(index.species.name);
    evolutionData.push(
      {
        name: pokemon.name,
        id: pokemon.id,
        imgUrl: pokemon.sprites.other['official-artwork'].front_default
      }
    );
    if (index.evolves_to.length > 0) {
      index = index.evolves_to[0];
    } else evolves = false;
  } while (evolves);
  return evolutionData;
}