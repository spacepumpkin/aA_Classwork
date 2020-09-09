class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?
   
    def current_user
        # session[:session_token] = User.first.session_token 
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def login_user!(user)
        session[:session_token] = user.reset_session_token!
    end

    def logged_in?
        !!current_user
    end

    def logout_user!
        current_user.reset_session_token! if current_user
        session[:session_token] = nil # backup
        @current_user = nil # backup 
    end
end
