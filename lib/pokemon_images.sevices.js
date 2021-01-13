const pokemonFullSrc = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';
const pokemonDetailsSrc = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
const extensions = '.png';

export function getPokemonImageFullSrc(number) {
  return pokemonFullSrc + number + extensions;
}

export function getPokemonImageDetailSrc(number) {
  return pokemonDetailsSrc + number + extensions;
}