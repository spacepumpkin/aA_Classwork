class SessionsController < ApplicationController
    def new
        render :new
    end

    def create
        @user = User.find_by_credentials(
            params[:user][:user_name], 
            params[:user][:password]
            )
        if @user 
            login_user!(@user)
            # @user.reset_session_token!
            redirect_to cats_url
        else
            redirect_to new_session_url
        end
    end

    def destroy
        logout_user!
        redirect_to new_session_url
    end


end
