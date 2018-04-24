import 'isomorphic-fetch';
require('es6-promise').polyfill();

const PUBLIC_KEY = 'bef3168978fac4d4fe49449ac04d223c';
const baseURL = 'https://gateway.marvel.com';

export function getCharacters() {
  return fetch(`${baseURL}/v1/public/characters?apikey=${PUBLIC_KEY}`).then(res => res.json())
          .then(json => json.data.results);
}
