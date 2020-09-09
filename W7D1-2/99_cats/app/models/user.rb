class User < ApplicationRecord
    validates :user_name, :password_digest, presence: true
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true

    before_validation :ensure_session_token

    attr_reader :password

    def self.find_by_credentials(username, password)
        user = User.find_by(user_name: username)
        if user && user.password_matches?(password)
            user
        else
            nil
        end
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def password_matches?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save
        self.session_token
    end

end
