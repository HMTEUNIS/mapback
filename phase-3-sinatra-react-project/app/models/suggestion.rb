class Suggestion < ActiveRecord::Base
  belongs_to :user
  belongs_to :neighborhood
  
end