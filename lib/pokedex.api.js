import Pokedex from '../pages/pokedex';

const pokeApi = require('pokedex-promise-v2');
const pokedex = new pokeApi();
const apiUrl = 'https://pokeapi.co/api/v2/';

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
      evolutionData;
    }
    index = response.chain;
    var evolves = true;
    do {
      evolutionData.push(index.species.name);
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
  const evolutionUrlSplit = speciesData.evolution_chain.url.split(/\/+/g);
  console.log(evolutionUrlSplit[evolutionUrlSplit.length - 2 ]);
  return evolutionUrlSplit[evolutionUrlSplit.length - 2 ];
}