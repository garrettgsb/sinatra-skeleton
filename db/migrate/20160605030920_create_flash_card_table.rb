class CreateFlashCardTable < ActiveRecord::Migration
  def change
    create_table "cards" do |t|
      t.text  "front"
      t.text  "back"
      t.integer "score"
    end
  end
end
