# json.extract! @guest, :name, :age, :favorite_color
json.partial! "guest", guest: @guest

json.gifts do 
  json.array! @guest.gifts, :title, :description
end
