# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Chirp.destroy_all
Like.destroy_all

#Instructors 
ryan = User.create!(username: "will_climb_rocks", age: 11, political_affiliation: "JavaScript", email: "boulderz@aa.io")
charlos = User.create!(username: "charlos_gets_buckets", age: 11, political_affiliation: "JavaScript", email: "ballin@aa.io")
lina = User.create!(username: "lina_2020", age: 11, political_affiliation: "Ruby", email: "good_speeches@aa.io")
erik = User.create!(username: "hawaiian_shirts_ftw", age: 11, political_affiliation: "JavaScript", email:"valhalla@aa.io")
zack = User.create!(username: "music_for_lyfe", age: 11, political_affiliation: "Python", email:"musicmaster@aa.io")
julia = User.create!(username: "give_me_wine", age: 11, political_affiliation: "JavaScript", email:"might_cry@aa.io")
big_company = User.create!(username: "instructors_rock", age: 52, political_affiliation: "Instructors", email: "giveus@money.now")


#chirps
chirp1 = Chirp.create!(author_id: charlos.id, body: "Buckets!!!")
chirp2 = Chirp.create!(author_id: big_company.id, body: "Hello fellow instructors.")
chirp3 = Chirp.create!(author_id: big_company.id, body: "Have you seen this sweet instructor merch?")
chirp4 = Chirp.create!(author_id: zack.id, body: "Zooommm!!!!")
chirp5 = Chirp.create!(author_id: ryan.id, body: "Kahoots are an opportunity to mess with students.")

chirp6 = Chirp.create!(author_id: julia.id, body: "No. Ryan. No.")
chirp7 = Chirp.create!(author_id: lina.id, body: "This is a random quote I found online. -Some person, 2020.")
chirp8 = Chirp.create!(author_id: erik.id, body: "You can also check out my sweet game. It was made with JavaScript.")
chirp9 = Chirp.create!(author_id: zack.id, body: "Python is the best coding language.")

chirp10 = Chirp.create!(author_id: ryan.id, body: "Programmer: A machine that turns coffee into code.")
chirp11 = Chirp.create!(author_id: big_company.id, body: "You're a wizard, instructor.")

# Likes

  # zack
  Like.create!(liker_id: zack.id, chirp_id: chirp4.id)
  Like.create!(liker_id: zack.id, chirp_id: chirp5.id)
  Like.create!(liker_id: zack.id, chirp_id: chirp6.id)
  Like.create!(liker_id: zack.id, chirp_id: chirp7.id)
  Like.create!(liker_id: zack.id, chirp_id: chirp8.id)
  Like.create!(liker_id: zack.id, chirp_id: chirp9.id)
  Like.create!(liker_id: zack.id, chirp_id: chirp10.id)

  # lina
  Like.create!(liker_id: lina.id, chirp_id: chirp6.id)
  Like.create!(liker_id: lina.id, chirp_id: chirp7.id)
  Like.create!(liker_id: lina.id, chirp_id: chirp8.id)
  Like.create!(liker_id: lina.id, chirp_id: chirp9.id)
  Like.create!(liker_id: lina.id, chirp_id: chirp4.id)
  Like.create!(liker_id: lina.id, chirp_id: chirp10.id)

  # charlos
  Like.create!(liker_id: charlos.id, chirp_id: chirp4.id)
  Like.create!(liker_id: charlos.id, chirp_id: chirp5.id)
  Like.create!(liker_id: charlos.id, chirp_id: chirp6.id)

  # erik
  Like.create!(liker_id: erik.id, chirp_id: chirp5.id)
  Like.create!(liker_id: erik.id, chirp_id: chirp6.id)
  Like.create!(liker_id: erik.id, chirp_id: chirp10.id)

  # Big Company
  Like.create!(liker_id: big_company.id, chirp_id: chirp1.id)
  Like.create!(liker_id: big_company.id, chirp_id: chirp4.id)
  Like.create!(liker_id: big_company.id, chirp_id: chirp5.id)
  Like.create!(liker_id: big_company.id, chirp_id: chirp6.id)

  #ryan
  Like.create!(liker_id: ryan.id, chirp_id: chirp7.id)
  Like.create!(liker_id: ryan.id, chirp_id: chirp8.id)
  Like.create!(liker_id: ryan.id, chirp_id: chirp9.id)
  Like.create!(liker_id: ryan.id, chirp_id: chirp10.id)
