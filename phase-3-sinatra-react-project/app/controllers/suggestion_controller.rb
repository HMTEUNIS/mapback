class SuggestionController < ApplicationController
    get "/suggestions" do
        suggestion = Suggestion.all
        suggestion.to_json(include: :neighborhood)
    end
end