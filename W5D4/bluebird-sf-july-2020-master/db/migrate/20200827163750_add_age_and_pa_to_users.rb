class AddAgeAndPaToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :political_affiliation, :string, null: false
    add_column :users, :age, :integer, null: false
    # add_column :table_name, :column_name, :data_type, null: false <= makes the col null false
    # remove_column <= used to remove a column
    # rename_column :table_name, :old_column_name, :new_column_name
    add_index :users, :political_affiliation
  end
end
