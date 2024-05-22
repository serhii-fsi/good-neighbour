CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    author_id INT REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    help_request_id INT REFERENCES help_requests(id) ON DELETE CASCADE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    description VARCHAR(255) 
);