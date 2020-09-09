## Question One

# What are the disadvantages of adding an index to a table column in a database?

# **Answer**: Indices do have a cost. They make writes (`INSERT`s, `DELETE`s, and
# `UPDATE`s) a little more taxing because the index table must also be updated.

################################################################################

## Question Two

# Given the following schema write all the `belongs_to` and `has_many` associations
# for models based on the below table (`User`, `Enrollment`, and `Course`)

# == Schema Information
#
# Table name: users #class User
#
#  id   :integer                not null, primary key
#  name :string                 not null

 
# Table name: enrollments  #class Enrollment
#
#  id   :integer                not null, primary key
#  course_id :integer           not null
#  student_id :integer          not null


# Table name: courses   #class Course
#
#  id   :integer                not null, primary key
#  course_name :string          not null
#  professor_id :integer        not null
#  prereq_course_id :integer    not null

# User
    has_many :enrollments,
    primary_id: :id, 
    foreign_id: :student_id,
    class_name: :Enrollment

    has_many :class_taken, #
    primary_id: :id, 
    foreign_id: :professor_id,
    class_name: Course #
    optional: true

#Enrollment
    belongs_to :user,
    primary_id: :id,
    foreign_id: :student_id,
    class_name: :User

    belongs_to :courses,
    primary_id: :id,
    foreign_id: :course_id,
    class_name: :Course


#Course
    has_many :courses,
    primary_id: :id, 
    foreign_id: :course_id,
    class_name: :Enrollment

    belongs_to :professors,
    primary_id: :id,
    foreign_id: :professor_id,
    class_name: :User

    belongs_to :prerq_course,
    primary_id: :id, 
    foreign_id: :prereq_course_id,
    class_name: :Course,
    optional: true

################################################################################
## Question Three

# Given all possible SQL commands order by order of query execution. (SELECT,
# DISTINCT, FROM, JOIN, WHERE, GROUP BY, HAVING, LIMIT/OFFSET, ORDER).


FRESH  =>FROM
JALAPENOS   => JOIN
WILL =>WHERE 
GIVE =>GROUP BY
HER =>HAVING
SOME => SELECT
D => DISTINTC
OLE =>ORDER
LOVIN =>LIMIT
OLE => OFFSET

LIMIT 2 OFFSET 10

# id animal color
# 1 cat orange
# 2 dog brown
# 3 bird green
# 4 snake blue
# 5 horse black

###############################################################################

## Question Four

# Given the following table:

# ```ruby
# # == Schema Information
# #
# # Table name: nobels
# #
# #  yr          :integer
# #  subject     :string
# #  winner      :string
# ```

# Write the following SQL Query:

# 1.  In which years was the Physics prize awarded, but no Chemistry prize?

SELECT
yr 
FROM 
nobels
WHERE 
subject = 'Physics' AND 
yr NOT IN ( SELECT yr
    FROM nobels
    WHERE subject = 'Chemistry'
)

# SELECT DISTINCT
#     yr
# FROM
#     nobels
# WHERE
#     (subject = 'Physics' AND yr NOT IN (
#     SELECT
#         yr
#     FROM
#         nobels
#     WHERE
#         subject = 'Chemistry'
#     ))

# yr IN ('1902', '1390')
# yr NOT IN ()

###############################################################################

# ## Question 5 

# What is the purpose of a database migration?

# **Answer**: A migration is a file containing Ruby code that describes a set of
# changes to be applied to a database. It may create or drop tables as well as add
# or remove columns from a table.


###############################################################################

## Question Six

# What is the difference between Database Constraints and Active Record
# Validations?

# data types: integer, float, varchar, text, string
# constraints: primary key, unique, null: true/false, foreign key

# **Answer**: **Validations** are defined inside **models**. Model-level
# validations live in the Rails world. Since we write them in Ruby, they are very
# flexible, database agnostic, and convenient to test, maintain and reuse.
# Validations are run whenever we `save` or `update` a model. **Constraints** are
# defined inside **migrations** and operate on the database. Constraints throw
# hard nasty errors whenever something that shouldn't be inputted into our
# database tries to get in there.

# rails g migrations createTable
# rails db:migrate <-- Constraints checked here (final check if it makes it past model)
#     # errors if data doesn't check out

# john.save! <-- Validations checked here (1st check)
#     # errors if data doesn't check out

###############################################################################

## Question Seven

Given the following table write all the `belongs_to` and `has_many` associations
for models based on the below table (`User`, `Game`, and `Score`)

# ruby
# == Schema Information
#
# Table name: user
#
#  id   :integer          not null, primary key
#  name :string           not null


# Table name: score
#
#  id   :integer           not null, primary key
#  number :integer         not null
#  user_id :integer        not null
#  game_id :integer        not null


# Table name: game
#
#  id   :integer           not null, primary key
#  name :string            not null
#  game_maker_id :integer  not null

SCORE
    belongs_to :user,
    primary_id: :id,
    foreign_id: :user_id,
    class_name: :User

    belongs_to :games,
    primary_id: :id,
    foreign_id: :game_id,
    class_name: :Game

USER 
    has_many :scores,
    primary_id: :id,
    foreign_id: :user_id,
    class_name: :Score

    has_many :games,
    primary_id: :id,
    foreign_id: :game_maker_id,
    class_name: :Game

GAME 
    has_many :score,
    primary_id: :id,
    foreign_id: :game_id,
    class_name: :Score

    belongs_to :game_maker,
    primary_id: :id,
    foreign_id: :game_maker_id,
    class_name: :User

