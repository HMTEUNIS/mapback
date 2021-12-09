class NeighborhoodController < ApplicationController

    get "/neighborhood" do
        Neighborhood.all.to_json
    end
end 