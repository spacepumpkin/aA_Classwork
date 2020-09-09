# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cat.destroy_all

# t.date "birth_date", null: false
#     t.string "color", null: false
#     t.string "name", null: false
#     t.string "sex", null: false
#     t.text "description", null: false

cat1 = Cat.create!(name: 'Summer', birth_date: '2015/03/12', color: 'orange', sex: 'M', description: 'I like catnip')
cat2 = Cat.create!(name:"Spooky", birth_date:"2001/02/21", color: 'gold', sex:'F',description:'Please pick me')
cat3 = Cat.create!(name:"Dino", birth_date:"1999/02/21", color: 'black', sex:'F',description:'I do scratch')
cat4 = Cat.create!(name:"Jade", birth_date:"2000/05/16", color: 'orange', sex:'F',description:'Can we be friends?')
cat5 = Cat.create!(name:"Dumpy", birth_date:"2017/09/21", color: 'gold', sex:'M',description:'Dogs love me')
cat6 = Cat.create!(name:"Chickey", birth_date:"2012/08/03", color: 'black', sex:'M',description:'nyancat')

