Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :users 

  # RESTFUL ROUTES
  # get '/users', to: 'users#index', as: 'users'
  # get '/users/:id', to: 'users#show'
  # get '/users/new', to: 'users#new', as: 'new_user'  
  # post '/users', to: 'users#create'#, as: 'new_user' 
  # patch '/users/:id', to: 'users#update'
  # delete '/users/:id', to: 'users#destroy' 

  resources :users, only: [:index, :show, :new, :create, :update, :destroy]
end
