class SubsController < ApplicationController

    before_action :require_logged_in, only: [:edit]

    def edit
        @sub = Sub.find(params[:id])
        render :edit
    end

    def update
        @sub = Sub.find_by(id: params[:id])
        if @sub && @sub.update(sub_params)
            redirect_to subs_url # check later
        else
            flash.now[:errors] = @sub.errors.full_messages
            render :edit
        end
    end

    def index 
        @subs = Sub.all 
        render :index
    end 


    private
    def sub_params
        params.require(:sub).permit(:title, :description)
    end

end
