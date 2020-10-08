import React from "react";
import PokemonIndexItem from "./pokemon_index_container";

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
    this.show = this.show.bind(this);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  show() {
    debugger
    // pokemon = this.props.requestAllPokemon()
    return this.props.pokemon.map((pokemon) => {
      return (
        <li>
          <div>{pokemon.name}</div>
          <img href={pokemon.image_url} />
        </li>
      )
    })
  }
  
  render() {
    return (
      <div>
        <h1>Pokemon Index</h1>
        <ul>
          {this.show()}
        </ul>
      </div>
    )
  }
}

export default PokemonIndex;