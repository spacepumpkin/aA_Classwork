import { receiveAllPokemon } from "../actions/pokemon_actions";
import * as APIUtil from "../util/api_utils";

const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export default requestAllPokemon;