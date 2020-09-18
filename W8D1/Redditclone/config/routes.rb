Rails.application.routes.draw do
  # get 'sessions/new'
  # get 'sessions/create'
  # get 'sessions/destroy'
  # get 'users/new'
  # get 'users/create'
  # get 'users/show'
  # get 'users/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, only: [:new, :create, :index, :show]
  resource :session, only: [:create, :new, :destroy]
  resources :subs, except: [:destroy]
  resources :posts, except: [:index]

  # root to: subs_url
  root to: 'subs#index'
end
