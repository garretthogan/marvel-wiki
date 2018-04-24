import 'isomorphic-fetch';
require('es6-promise').polyfill();

const PUBLIC_KEY = process.env.PUBLIC_KEY || require('../.env.json').PUBLIC_KEY;
const baseURL = 'https://gateway.marvel.com';

export function getCharacters(offset = 0) {
  return fetch(`${baseURL}/v1/public/characters?apikey=${PUBLIC_KEY}&offset=${offset}&limit=21`).then(res => res.json())
          .then(json => json.data.results);
}
