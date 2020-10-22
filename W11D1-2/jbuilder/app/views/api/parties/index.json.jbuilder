# Longer way
# json.array! @parties do |party|
#   json.extract! party, :name, :location
#   json.guests party.guests, partial: "api/guests/guest", as: :guest
# end

# Long way
# json.array! @parties do |party|
#   json.extract! party, :name, :guests
# end

# Short way
json.array! @parties, :name, :guests