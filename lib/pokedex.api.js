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

export async function basicPokemonData(pokemonName) {
  const pokemon = await getPokemon(pokemonName);
  return {
    name: pokemon.name,
    id: pokemon.id,
    imgUrl: pokemon.sprites.other['official-artwork'].front_default,
  };
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