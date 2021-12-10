class Neighborhood < ActiveRecord::Base
    has_many :suggestions 
    has_many :users, through: :suggestions

    def average_rating
        
        r = self.suggestions.map {|n| n.rating}
        if r.length > 0
        (r.sum(0.0) / r.length)
        else 0
        end
       end
   
       def self.best
        b = Neighborhood.all.sort_by {|n| -n.average_rating}
        b[0..4]
       end
end


    
   
