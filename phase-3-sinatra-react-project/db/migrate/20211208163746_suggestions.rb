class Suggestions < ActiveRecord::Migration[6.1]
  def change
    create_table :suggestions do |t|
      t.string :eat
      t.string :learn
      t.string :do
      t.string :watch
      t.integer :rating
      t.string :comment
      t.integer :neighorhood_id
      t.integer :user_id
      end
    end
  end
end
