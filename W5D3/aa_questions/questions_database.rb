require 'sqlite3'
require 'singleton'
require 'byebug'

class QuestionsDatabase < SQLite3::Database
    include Singleton

    def initialize
        super('questions.db')
        self.type_translation = true
        self.results_as_hash = true
    end
end

class User
    attr_accessor :id, :fname, :lname, :is_instructor

    def self.find_by_id(id)
        user = QuestionsDatabase.instance.execute(<<-SQL, id)
            SELECT
                *
            FROM
                users
            WHERE
                users.id = ?
        SQL
        return User.new(user[0])
    end

    def self.find_by_name(fname, lname)
        user = QuestionsDatabase.instance.execute(<<-SQL, fname, lname)
        SELECT
            *
        FROM
            users
        WHERE
            users.fname = ? AND users.lname = ?
        SQL
        return User.new(user[0])
    end

    def initialize(options)
        @id = options['id']
        @fname = options['fname']
        @lname = options['lname']
        @is_instructor = options['is_instructor']
    end

    def authored_questions
        Question.find_by_author_id(id)
    end
end

class Question
    attr_accessor :id, :title, :body, :author_id

    def self.find_by_id(id)
        question = QuestionsDatabase.instance.execute(<<-SQL, id)
        SELECT
            *
        FROM
            questions
        WHERE
            questions.id = ?
        SQL
        return Question.new(question[0])
    end

    def self.find_by_author_id(author_id)
        questions = QuestionsDatabase.instance.execute(<<-SQL, author_id)
        SELECT
            *
        FROM
            questions
        WHERE
            questions.author_id = ?
        SQL
        questions.map { |question| Question.new(question) }
    end

    def initialize(options)
        @id = options['id']
        @title = options['title']
        @body = options['body']
        @author_id = options['author_id']
    end

    def author
        User.find_by_id(author_id)
    end

    def replies
        Reply.find_by_question_id(id)
    end
end

class Reply
    attr_accessor :id, :body, :parent_reply, :question_id, :user_id

    def self.find_by_user_id(user_id)
        replies = QuestionsDatabase.instance.execute(<<-SQL, user_id)
        SELECT
            *
        FROM
            replies
        WHERE
            replies.user_id = ?
        SQL
        replies.map { |reply| Reply.new(reply) }
    end

    def self.find_by_question_id(question_id)
        replies = QuestionsDatabase.instance.execute(<<-SQL, question_id)
        SELECT
            *
        FROM
            replies
        WHERE
            replies.question_id = ?
        SQL
        replies.map { |reply| Reply.new(reply) }
    end

    def initialize(options)
        @id = options['id']
        @body = options['body']
        @parent_reply = options['parent_reply']
        @question_id = options['question_id']
        @user_id = options['user_id']
    end

    def author
        User.find_by_id(user_id)
    end

    def question
        Question.find_by_id(question_id)
    end

    def parent_reply
        parent = QuestionsDatabase.instance.execute(<<-SQL, @parent_reply)
        SELECT
            *
        FROM
            replies
        WHERE
            replies.id = ?
        SQL

        return Reply.new(parent[0])
    end

    def child_replies
        child = QuestionsDatabase.instance.execute(<<-SQL, id)
        SELECT
            *
        FROM
            replies
        WHERE
            replies.parent_reply = ?
        SQL
        return Reply.new(child[0])
    end
end

class QuestionFollows

end


class QuestionLikes

end
