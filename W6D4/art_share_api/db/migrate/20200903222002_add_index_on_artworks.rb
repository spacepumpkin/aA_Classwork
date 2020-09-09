class AddIndexOnArtworks < ActiveRecord::Migration[5.2]
  def change
    add_index :artworks, :image_url, unique: true
  end
end
