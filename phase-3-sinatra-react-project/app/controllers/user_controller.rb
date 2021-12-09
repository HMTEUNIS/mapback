class UserController < ApplicationController
    get "/user" do
        User.all.to_json
    end
end