# == Schema Information
#
# Table name: courses
#
#  id            :bigint           not null, primary key
#  name          :string
#  prereq_id     :integer
#  instructor_id :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Course < ApplicationRecord

    has_many :enrollments,
        primary_key: :id,
        foreign_key: :course_id,
        class_name: :Enrollment
        
    has_many :enrolled_students,
        through: :enrollments,
        source: :student

    belongs_to :instructor,
        primary_key: :id,
        foreign_key: :instructor_id,
        class_name: :User

    # PURE CONFUSION
    # lists postreqs
    has_many :postreq,
        primary_key: :id,
        foreign_key: :prereq_id,
        class_name: :Course

    # lists prereqs
    belongs_to :prereq,
        primary_key: :id,
        foreign_key: :prereq_id,
        class_name: :Course
end
