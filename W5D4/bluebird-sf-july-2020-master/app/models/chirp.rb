# == Schema Information
#
# Table name: chirps
#
#  id        :bigint           not null, primary key
#  body      :text             not null
#  author_id :integer          not null
#
class Chirp < ApplicationRecord
    validates :body, presence: true
    # validates :body, :author_id, presence: true
    validate :body_too_long

    # always start with tables that have foreign keys(author_id)

    # **Where the foreign key lives is where you write your belongs to**

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    # Every time you write a belongs to, write the corresponding has_many/has_one

    has_many :likes,
        primary_key: :id,
        foreign_key: :chirp_id,
        class_name: :Like

    has_many :likers,
        through: :likes,
        source: :liker

    def body_too_long
        if body && body.length > 140
            errors[:body] << "Too Long!!"
        end
    end

end
