DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    avatar_url VARCHAR NOT NULL,
    first_name VARCHAR NOT NULL,
    surname VARCHAR NOT NULL,
    user_address VARCHAR NOT NULL,
    user_age INT NOT NULL,
    residence_area VARCHAR NOT NULL,
    post_code VARCHAR NOT NULL,
    help_offered INT NOT NULL,
    help_requests INT NOT NULL
);