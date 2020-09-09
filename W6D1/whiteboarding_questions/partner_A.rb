# Gary

## Question One: Employees Query

# You are given a PostgreSQL database with two tables: the first is an `employees`
# table and the second is a `departments` table. Employees can belong to a single
# department.

# 1.  Write a SQL query that, given a department name, finds all the employees
#     `name`s that are in that department.

# Join the dept table w/employee table
# filter out the combined table by the name of the dept
# return all the employee names after filtering

SELECT employees.name
FROM departments
JOIN employees ON departments.id = employees.department_id
WHERE department.name = 'Logistics'

# 2.  Next find the name of the employees that don't belong to any department

# Join the two tables with a left join to get all the employees even if department_id
# is null; select employee names

SELECT employees.name
FROM employees
LEFT JOIN departments ON employees.department_id = departments.id

SELECT
  employees.name
FROM
  employees
WHERE
  employees.department_id IS NULL;

################################################################################

#  ## Question Two:

# Describe the differences between a primary key and a foreign key.

# **Answer**: A primary key uniquely identifies a record in the relational
# database table, whereas a foreign key refers to the `id` column which is the
# primary key of **another** table.

################################################################################

# ## Question Three:

# Given the following table write all the `belongs_to` and `has_many` **and**
# `has_many through` associations for models based on the below table
# (`Physician`, `Appointment`, and `Patient`)

#ruby
# == Schema Information
#
# Table name: physicians
#
#  id   :integer          not null, primary key
#  name :string           not null


# Table name: appointments
#
#  id   :integer           not null, primary key
#  physician_id :integer   not null -- DONE
#  patient_id :integer     not null -- DONE


# Table name: patients
#
#  id   :integer           not null, primary key
#  name :string            not null
#  primary_physician_id :integer -- DONE


# Physicians
has_many :appointments,
    class_name: :Appointment,
    primary_key: :id,
    foreign_key: :physician_id

has_many :primary_patients,
    class_name: :Patient,
    primary_key: :id,
    foreign_key: :primary_physician_id

has_many :other_patients,
    through: :appointments,
    source: :patient

has_many :primary_patient_appointments,
    through: :primary_patients,
    source: :appointments

# Appointments
belongs_to :physician,
    class_name: :Physician,
    primary_key: :id,
    foreign_key: :physician_id

belongs_to :patient,
    class_name: :Patient,
    primary_key: :id,
    foreign_key: :patient_id

# Patients
has_many :appointments,
    class_name: :Appointment,
    primary_key: :id,
    foreign_key: :patient_id

belongs_to :primary_physician,
    class_name: :Physician,
    primary_key: :id,
    foreign_key: :primary_physician_id

######################################################################

# ## Question 4

# Paraphrase the advantages of using an ORM (like ActiveRecord).

# Using an ORM (Object Relational Model) allows you to interact with
# database information in an OOP way. An ORM like ActiveRecord will translate rows
# from your SQL tables into Ruby objects on fetch, and translates your Ruby
# objects back to rows on save resulting in less overall database access code.

######################################################################
# Question 5

# When are model validations run?

# Whenever a model instance is _updated_ or _saved_ to the database.


# When Does Validation Happen?
# There are two kinds of Active Record objects: those that correspond to a row inside your database and those that do not. When you create a fresh object, for example using the new method, that object does not belong to the database yet. Once you call save upon that object it will be saved into the appropriate database table. Active Record uses the new_record? instance method to determine whether an object is already in the database or not. Consider the following Active Record class:

#     https://edgeguides.rubyonrails.org/active_record_validations.html

# class Person < ApplicationRecord
#     validates :name, presence: true

# end

# john = Person.new(name: 'John', age: 12)
# john.name
# john.age
# john.dogs

# john.save!
# --> john.valid? == true

# mary = Person.new(age: 14)
# mary.save!
# --> "Error, Person needs a name"  # VALIDATION

######################################################################

## Question Six:

Given the following Schema:

ruby

# == Schema Information
#
# Table name: actors
#
#  id          :integer      not null, primary key
#  name        :string
#
# Table name: movies
#
#  id          :integer      not null, primary key
#  title       :string
#
# Table name: castings
#
#  movie_id    :integer      not null, primary key
#  actor_id    :integer      not null, primary key
#  ord         :integer


# Write two SQL Queries:

# 1.  List the films where 'Harrison Ford' has appeared - but not in the star
#     role.
#     - **Note:** the `ord` field of casting gives the position of the actor. If
#       `ord=1` then this actor is in the starring role

# join all the tables
# name = 'Harrison Ford'
# ord != 1
# select movies.title

execute(<<-SQL)
    SELECT movies.title
    FROM movies
    JOIN castings ON movies.id = castings.movie_id
    JOIN actors ON actors.id = castings.actor_id
    WHERE
        actors.name = 'Harrison Ford' AND
        castings.ord != 1
SQL

# 2.  Obtain a list in alphabetical order of actors who've had at least 15
#     starring roles.

# join actors + castings tables
# ord = 1
# group by actors.id
# having count(*) >= 15
# order by actors.name ASC

execute(<<-SQL)
    SELECT actors.name
    FROM actors
    JOIN castings ON actors.id = castings.actor_id
        WHERE ord = 1
    GROUP BY actors.id
        HAVING COUNT(*) >= 15
    ORDER BY actors.name
SQL

######################################################################

## Question Seven:

Identify the difference between a `has_many through` and a `has_one`
association?

doctor has_many patients (20)
doctor has_one current_patient (1)

doctor
has_many patients
    primary_key
    foreign_key
    class_name

has_one current_patient
    primary_key: :id
    foreign_key: :current_doctor
    class_name: :Patient

belongs_to :current_doctor,
    primary_key: :id
    foreign_key: :current_doctor
    class_name: :Doctor

 We use `has_many` when a record holds a column (the primary key)
that is referred to by a foreign key in the associated records. 

`has_one` is a
`has_many` association where at most one associated record will exist so we will
only return a single instance of the model.