class InitialBuild < ActiveRecord::Migration
  def change
    create_table "songs", force: :cascade do |t|
      t.string "title"
      t.string "artist"
      t.string "url"
    end #"songs"

    # create_table "users" do |t|
    #   t.string "das_name"
    #   t.string "das_pass"
    # end #"users"
    #
    # create_table "upvotes", add_foreign_key :articles, :authors do |t|
    #   t.string "votes"
    # end #"upvotes"


  end
end
