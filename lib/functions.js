export function capitalize(s) {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export function pokemonIdToString(id) {
  if (id.toString().length == 1) {
    return '00' + id;
  } 
  if (id.toString().length == 2) {
    return '0' + id;
  }
  return id.toString();
}

export function cleanUnderscore(key) {
  let keyString = '';
  for (let i = 0; i < key.length; i++) {    
    if (key[i] === '_') {
      keyString += ' ';
    } else {
      keyString += key[i];
    }
  }
  return keyString;
}