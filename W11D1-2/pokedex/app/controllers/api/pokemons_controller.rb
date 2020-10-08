class Api::PokemonsController < ApplicationController
  def index
    # debugger
    @pokemons = Pokemon.all
    render :index
  end

  def show
    @pokemon = Pokemon.includes(:items).find(params[:id])
    # @pokemon = Pokemon.find(params[:id])
    # @pokemon = Pokemon.includes(:items).where(id: params[:id])
    render :show
  end

  def create
    @pokemon = Pokemon.new(poke_params)
    if @pokemon.save
      render :show 
    else
      flash[errors] = @pokemon.error.full_massages
    end
  end

  private

  def poke_params
    params.require(:pokemons).permit(:name, :image_url, :attack, :defense, :poke_type, :moves)
  end 
end
