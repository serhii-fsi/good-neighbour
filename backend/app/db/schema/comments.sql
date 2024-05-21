CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE NOT NULL,
    help_request_id INT REFERENCES help_requests(id) ON DELETE CASCADE NOT NULL,
    created_at TIMESTAMP NOT NULL,
    description VARCHAR NOT NULL
);