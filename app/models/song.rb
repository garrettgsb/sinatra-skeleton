class Song < ActiveRecord::Base
  validates :artist, presence: true
  validates :title, length: { minimum: 2 }
  validates :url, format: { with: /youtube/ }

  def embed_url
    url.gsub("watch?v=", "embed/")
  rescue NoMethodError
    nil
  end #embed_url

end #class
