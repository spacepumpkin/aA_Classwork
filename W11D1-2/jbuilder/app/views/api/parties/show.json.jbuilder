# @party.guests.each do |guest|
#     json.set! guest[:name] do 
#       json.extract! guest, :age, :favorite_color 
#       @gifts = Gift.where(guest_id: guest[:id])
#       json.merge! json.
#     end
#   end

json.extract! @party, :name, :location
json.guests @party.guests do |guest|
  json.partial! "api/guests/guest", guest: guest
  json.gifts guest.gifts, :title
end