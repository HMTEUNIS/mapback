class Users < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.boolean :local
      t.integer :age
    end
  end
end
