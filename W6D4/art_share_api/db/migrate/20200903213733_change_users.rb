class ChangeUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :email
    # change_column :users, :name, unique: true
    rename_column :users, :name, :username
  end
  add_index :users, :name, unique: true
end
