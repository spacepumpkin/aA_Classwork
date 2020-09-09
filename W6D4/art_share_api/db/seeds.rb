# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


    User.destroy_all
    Artwork.destroy_all
    ArtworkShare.destroy_all

    davinci = User.create!({username: 'davinci'})
    michelangelo= User.create!(username: 'michelangelo')
    vangogh = User.create!(username: 'vangogh')
    rembrandt = User.create!(username: 'rembrandt')
    ryan = User.create!(username: 'Ryan')

    bob = User.create!(username: 'Bob')
    zhang = User.create!(username: 'Zhang')
    gary = User.create!(username: 'Gary')

    artwork1 = Artwork.create({title: 'Mona Lisa', artist_id: davinci.id, image_url: 'davinci1'})
    artwork2 = Artwork.create({title: 'David', artist_id: michelangelo.id, image_url: 'michelangelo1' })
    artwork3 = Artwork.create({title: 'Starry Night Sky', artist_id: vangogh.id, image_url: 'vangogh1'})
    artwork4 = Artwork.create({title: 'The Night Watch', artist_id: rembrandt.id, image_url: 'rembrandt1'})
    artwork5 = Artwork.create!({title: 'Untitled', artist_id: rembrandt.id, image_url: 'rembrandt2'})
    

    ArtworkShare.create!({viewer_id: bob.id, artwork_id:artwork1.id})
    ArtworkShare.create!({viewer_id: bob.id, artwork_id:artwork2.id})
    ArtworkShare.create!({viewer_id: bob.id, artwork_id:artwork3.id})
    ArtworkShare.create!({viewer_id: bob.id, artwork_id:artwork4.id})
    ArtworkShare.create!({viewer_id: bob.id, artwork_id:artwork5.id})

    ArtworkShare.create!({viewer_id: zhang.id, artwork_id:artwork1.id})
    ArtworkShare.create!({viewer_id: zhang.id, artwork_id:artwork2.id})

    ArtworkShare.create!({viewer_id: gary.id, artwork_id:artwork3.id})
    ArtworkShare.create!({viewer_id: gary.id, artwork_id:artwork4.id})



