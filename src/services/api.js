// src/services/api.js
import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/';

export const getPokemons = (limit = 20, offset = 0) => {
  return axios.get(`${API_URL}pokemon?limit=${limit}&offset=${offset}`);
};

export const getPokemonDetails = (url) => {
  return axios.get(url);
};
