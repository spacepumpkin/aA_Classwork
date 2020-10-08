class Api::SessionsController < ApplicationController

  before_action :require_logged_in, only: [:destroy] 

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render "/api/users/show" # json: {}
    else
      render json: {errors: "invalid username or password"}
    end
  end

  def destroy
      logout!
      render json: {}
  end

end
