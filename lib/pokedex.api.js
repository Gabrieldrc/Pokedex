import Pokedex from '../pages/pokedex';

const pokeApi = require('pokedex-promise-v2');
const pokedex = new pokeApi();

export function getPokemon(number) {
  var pokemonData;
  pokedex.getPokemonByName(number, function(response, error) {
    if (!error) {
      pokemonData = response;
    } else {
      console.log(error);
      return {};
    }
  });
  return pokemonData;
}

export function getPokemonName(number) {
  return getPokemon(number).name;
}
