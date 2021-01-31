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
  var pokemon1 = dataObject.chain;
  async function createPokemonObject(pokemonName) {
    const pokemon = await getPokemon(pokemonName);
    return {
      name: pokemon.name,
      id: pokemon.id,
      imgUrl: pokemon.sprites.other['official-artwork'].front_default,
      evolves_to: [],
    };
  }
  var firstFase = await createPokemonObject(pokemon1.species.name);
  // if evolves
  if (pokemon1.evolves_to.length > 0) {
    var secondFase;
    pokemon1.evolves_to.forEach(async (pokemon2) => {
      secondFase = await createPokemonObject(pokemon2.species.name);
      if (pokemon2.evolves_to.length > 0) 
      {
        pokemon2.evolves_to.forEach(async (pokemon3) => {
          secondFase.evolves_to.push(await createPokemonObject(pokemon3.species.name));
        });
      }
      firstFase.evolves_to.push(secondFase)
    });
  }
  return firstFase;
}