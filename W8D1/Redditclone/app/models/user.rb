# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :username, :password_digest, :session_token, presence: true
    validates :username, :session_token, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}

    has_many :posts,
    foreign_key: :author_id,
    class_name: :Post

    has_many :subs,
    foreign_key: :moderator_id,
    class_name: :Sub


    attr_reader :password
    after_initialize :ensure_session_token

    def password=(pw)
        @password = pw
        self.password_digest = BCrypt::Password.create(pw)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64(16)
    end

    # Need this in ApplicationController
    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64(16)
        self.save!
        self.session_token
    end

    def is_password?(pw)
        BCrypt::Password.new(self.password_digest) == pw
    end

    # Need this in SessionsController
    def self.find_by_credentials(username, pw)
        @user = User.find_by(username: username)
        (@user && @user.is_password?(pw)) ? @user : nil
    end

end
