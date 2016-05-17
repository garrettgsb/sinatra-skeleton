class Message < ActiveRecord::Base
  validates :author, presence: true
  validates :content, length: { minimum: 10 }
end #class
