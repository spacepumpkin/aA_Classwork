import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions'


const pokemonReducer = (prevState = {}, action) => {
  // debugger
  Object.freeze(prevState);
  // let nextState = Object.assign({}, prevState);
  switch (action.type) {
    case (RECEIVE_ALL_POKEMON):
      return action.pokemon;
      // nextState = action.pokemon;
      // return nextState;
    default:
      return prevState;
  }
}

export default pokemonReducer;
