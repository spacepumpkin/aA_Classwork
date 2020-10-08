import { connect } from "react-redux";
import { selectAllPokemon } from "../../reducers/selectors";
import requestAllPokemon from "../../middleware/request_all_pokemon";
import PokemonIndex from "./pokemon_index";

const mapStateToProps = state => ({
   pokemon: selectAllPokemon(state)
});

const mapDispatchToProps = dispatch => ({
   requestAllPokemon: pokemon => dispatch(requestAllPokemon(pokemon))
});



export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);

