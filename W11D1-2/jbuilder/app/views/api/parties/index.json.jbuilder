# Long way
# json.array! @parties do |party|
#   json.extract! party, :name, :location
# end

# Short way
json.array! @parties, :name, :location


# Add guests

# json.guests do 
#   json.array! party.guests, :name, :age, :favorite_color
# end