class UsersController < ApplicationController
    def index
        # users = User.new(params.require(:user).permit(:age,:username,:email,:political_affiliation))
        # render plain: "I'm in the index action! Hi Zhang Zhang"
        users = User.all
        render json: users
    end

    def create
        # debugger
        # render json: params
        # debugger
        user = User.new(user_params)
        if user.save!
            # render json: user
            # redirect_to "/users/#{user.id}"
            redirect_to user_url(user)
        else
            render json: user.errors.full_messages, status: 422 # bad request
        end
        # debugger
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    def update
        user = User.find(params[:id])
        if user.update(user_params)
            render json: user
        else
            render json: user.errors.full_messages, status: 422 # bad request
        end
    end

    def destroy
        user = User.find(params[:id])
        if user.destroy
            render json: user
        else
            render json: user.errors.full_messages, status: 422 # bad request
        end
    end

    private
    def user_params
        params.require(:user).permit(:name, :email)
    end
end
# http://localhost:3000