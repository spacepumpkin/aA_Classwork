DROP TABLE IF EXISTS question_likes;
DROP TABLE IF EXISTS replies;
DROP TABLE IF EXISTS question_follows;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS users;

PRAGMA foreign_keys = ON;

CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    fname TEXT NOT NULL,
    lname TEXT NOT NULL,
    is_instructor INTEGER NOT NULL
);

CREATE TABLE questions (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    author_id INTEGER NOT NULL,

    FOREIGN KEY (author_id) REFERENCES users(id)
);

CREATE TABLE question_follows (
    id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    question_id INTEGER NOT NULL,

    FOREIGN KEY (user_id) REFERENCES users(id)
    FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE replies (
    id INTEGER PRIMARY KEY,
    body TEXT NOT NULL,
    parent_reply INTEGER,
    question_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,

    FOREIGN KEY (parent_reply) REFERENCES replies(id)
    FOREIGN KEY (question_id) REFERENCES questions(id)
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE question_likes (
    id INTEGER PRIMARY KEY,
    author_id INTEGER NOT NULL,
    question_id INTEGER NOT NULL,

    FOREIGN KEY (author_id) REFERENCES users(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);

INSERT INTO
    users (fname, lname, is_instructor)
VALUES
    ('Jason', 'Zhen', 1),
    ('Gary', 'Wan', 0);

INSERT INTO
    questions (title, body, author_id)
VALUES
    ('hello?', 'catching up', 1),
    ('potatoes', 'what is your favorite kind?', 1),
    ('life', 'what is life?', 2),
    ('help', 'what is going on??', 2);

INSERT INTO
    question_follows (user_id, question_id)
VALUES
    (1, 1),
    (2, 2);

INSERT INTO
    replies (body, parent_reply, question_id, user_id)
VALUES
    ('Good. How about you?', NULL, 1, 1),
    ('Terrible', 1, 1, 1);

INSERT INTO
    question_likes (author_id, question_id)
VALUES
    (1, 1),
    (2, 2),
    (2, 1);
