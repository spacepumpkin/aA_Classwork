class UsersController < ApplicationController
  before_action :require_logged_in, only: [:show, :index]

  def new

  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      redirect_to subs_url 
    else 
      flash[:errors] = @user.errors.full_messages
      render :new
    end 
  end

  # def show

  # end

  # def index
  # end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
