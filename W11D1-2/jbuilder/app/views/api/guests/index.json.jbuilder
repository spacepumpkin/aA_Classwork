json.array! @guests do |guest|
  #  json.name guest.name
  #  json.age guest.age
  #  json.favorite_color guest.favorite_color
  next if guest.age < 40 || guest.age > 50
  json.partial! "api/guests/guest", guest: guest
end

# json.partial:
# json.extract! guest, :name, :age, :favorite_color