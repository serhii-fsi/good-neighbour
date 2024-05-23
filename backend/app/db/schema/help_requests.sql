CREATE TABLE help_requests (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author_id INT REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    help_type_id INT REFERENCES help_types(id) ON DELETE CASCADE NOT NULL,
    description VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    req_date TIMESTAMP NOT NULL,
    status REQUEST_STATUS DEFAULT 'active' NOT NULL
);