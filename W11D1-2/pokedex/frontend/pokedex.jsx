// frontend/pokedex.jsx

import React from "react";
import ReactDOM from "react-dom";
import {receiveAllPokemon} from "./actions/pokemon_actions";
import {fetchAllPokemon} from "./util/api_utils";
import configureStore from "./store/store";
import requestAllPokemon from "./middleware/request_all_pokemon";
import {selectAllPokemon} from "./reducers/selectors";

// Components
import Root from "./components/root";

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const getSuccess = pokemon => console.log(receiveAllPokemon(pokemon))
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);

  /* for testinggggg */
  window.receiveAllPokemon = receiveAllPokemon;
  window.getSuccess = getSuccess
  window.fetchAllPokemon = fetchAllPokemon;
  window.getState = store.getState
  window.dispatch = store.dispatch
  window.store = store
  window.selectAllPokemon = selectAllPokemon
  window.requestAllPokemon = requestAllPokemon
});
