
json.set! "pokemon" do 
  json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type, :image_url, :item_ids 
  # json.moves @pokemon.moves 
  # json.extract! @pokemon, :poke_type, :image_url, :item_ids
end

# json.set! 
  json.items @pokemon.items
# end

