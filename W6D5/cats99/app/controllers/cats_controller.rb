class CatsController < ApplicationController

    def index
        @cats = Cat.all 
        # render plain: "cats"  
        render :index # passes to index.html.erb
    end

    def show
        @cat = Cat.find_by(id: params[:id])
        # render plain: "current cat"
        render :show # passes to show.html.erb
    end

    def create
        # cat = Cat.new(params)
        if @cat = Cat.create!(cat_params)
            redirect_to cat_url(@cat) # cats.show
        else
            # render @cat.errors.full_messages, status: 422
            render :new
        end
    end

    def new
        @cat = Cat.new
        render :new # passes to new.html.erb
    end

    def update
        @cat = Cat.find(params[:id])
        if @cat.update (cat_params)
            redirect_to cat_url(@cat)
        else
            render :edit 
        end
    end

    def edit
        @cat = Cat.find(params[:id])
        render :edit # passes to edit.html.erb with current cat params
    end

    # username 
    # email

    # cat[name]
    # cat[birth_date]
    # cat[color]

    private
    def cat_params
        params.require(:cat).permit(:name,:birth_date,:color,:sex,:description)
    end

end
