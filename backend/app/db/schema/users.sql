CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL,
    avatar_url VARCHAR NOT NULL,
    first_name VARCHAR NOT NULL,
    about VARCHAR
    phone_number INT
    last_name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    address VARCHAR NOT NULL,
    age INT NOT NULL,
    post_code VARCHAR NOT NULL,
    help_offered INT DEFAULT 0 NOT NULL,
    help_requests INT DEFAULT 0 NOT NULL
);
