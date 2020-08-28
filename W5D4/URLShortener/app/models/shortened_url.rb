require 'securerandom'

class ShortenedUrl < ApplicationRecord
    validates :long_url, presence: true
    validates :short_url, uniqueness: true
    validates :user_id, presence: true

    def self.random_code
        SecureRandom::urlsafe_base64
    end
end

