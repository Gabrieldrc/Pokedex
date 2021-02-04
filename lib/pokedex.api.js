const pokeApi = require('pokedex-promise-v2');
const pokedex = new pokeApi();
const axios = require('axios');
import useSWR from 'swr';
const pokeApiUrl = 'https://pokeapi.co/api/v2/';

const fetcher = async (...args) =>  await axios.get(...args);

export function basicPokemonDataFilter(pokemonData) {
  return {
    name: pokemonData.name,
    id: pokemonData.id,
    imgUrl: pokemonData.sprites.other['official-artwork'].front_default,
  };
}

// this function works on the client side
export function basicPokemonDataCS(id) {
  const { data, error } = useSWR(`${pokeApiUrl}pokemon/${id}`, fetcher) 
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
  
}

export async function basicPokemonData(id) {
  const pokemon = await pokedex.getPokemonByName(id);
  return basicPokemonDataFilter(pokemon);
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
  var pokemon1 = dataObject.chain;
  let evolutions = [pokemon1.species.name];
  if (pokemon1.evolves_to.length > 0) {
    let secondFase = [];
    pokemon1.evolves_to.forEach(async (pokemon2) => {
      secondFase.push(pokemon2.species.name);
      if (pokemon2.evolves_to.length > 0) {
        let thirdFase = [];
        pokemon2.evolves_to.forEach(async (pokemon3) => {
          thirdFase.push(pokemon3.species.name);
        });
        secondFase.push(thirdFase);
      }
    });
    evolutions.push(secondFase);
  }
  return evolutions;
}