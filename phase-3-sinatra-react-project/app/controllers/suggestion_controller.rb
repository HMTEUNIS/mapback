class SuggestionController < ApplicationController
    get "/suggestion" do
        Suggestion.all.to_json
    end
end