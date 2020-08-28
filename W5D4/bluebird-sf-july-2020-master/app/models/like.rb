# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  liker_id   :integer          not null
#  chirp_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Like < ApplicationRecord
    validates :chirp_id, uniqueness: {scope: :liker_id}
    # when you write a belongs_to, it auto validates the presence of that foreign key

    belongs_to :liker,
        primary_key: :id,
        foreign_key: :liker_id,
        class_name: :User
        # optional: true

    belongs_to :chirp,
        primary_key: :id,
        foreign_key: :chirp_id,
        class_name: :Chirp

end
