import { receiveAllPokemon } from "../actions/pokemon_actions";

export const fetchAllPokemon = () => {
  return $.ajax({
    url: '/api/pokemons',
    method: 'GET'
  })
}

// export {fetchAllPokemon};