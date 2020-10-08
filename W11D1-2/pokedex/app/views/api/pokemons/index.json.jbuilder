
# Render json for index


# {
#   1: {
#     id: 1,
#     name: /*...*/,
#     image_url: /*...*/
#   },
#   2: {
#     id: 2,
#     name: /*...*/,
#     image_url: /*...*/
#   },
# }

@pokemons.each do |pokemon|
   json.set! pokemon.id do
      json.id pokemon.id
      json.name pokemon.name
      json.image_url asset_path("pokemon_snaps/#{pokemon.image_url}")
   end
end