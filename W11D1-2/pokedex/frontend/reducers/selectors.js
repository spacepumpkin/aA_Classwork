export const selectAllPokemon = (state) => {
   let pokemon = state.entities.pokemon;
   return Object.values(pokemon)
}

