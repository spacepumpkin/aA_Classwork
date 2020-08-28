class AddIndexToLikes < ActiveRecord::Migration[5.2]
  def change
    # add_index :likes, :chirp_id
    add_index :likes, :liker_id

    add_index :likes, [:chirp_id,:liker_id], unique: true
    #                   ^ auto adds index for chirp_id
  end
end
