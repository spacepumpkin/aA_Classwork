module ApplicationHelper

    def auth_token 
        "<input type=\"hidden\" name=\"authenticity_token\" value=\"#{html_escape(form_authenticity_token)}>\">".html_safe
    end

end
