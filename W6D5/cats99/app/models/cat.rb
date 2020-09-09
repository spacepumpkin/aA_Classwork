require "action_view"

class Cat < ApplicationRecord 
    include ActionView::Helpers::DateHelper   

    COLORS = ["orange", "black", "gold"]

    validates :birth_date, :color, :name, :sex, :description, presence: true
    validates :color, inclusion: { in: COLORS }
    validates :sex, inclusion: { in: %w(M F) }

    def age
        #current date can be populated from timestamp
        #subtract current date from date of birth to get age
        time_ago_in_words(birth_date)
        
    end

end

