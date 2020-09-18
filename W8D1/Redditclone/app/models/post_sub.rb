# == Schema Information
#
# Table name: post_subs
#
#  id         :bigint           not null, primary key
#  sub_id     :integer          not null
#  post_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class PostSub < ApplicationRecord

    validates :sub_id, uniqueness: {scope: :post_id}

    belongs_to :posts,
        foreign_key: :post_id,
        class_name: :Post

    belongs_to :subs,
        foreign_key: :sub_id,
        class_name: :Sub
end
