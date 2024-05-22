CREATE TYPE status_enum AS ENUM ('active', 'completed', 'closed', 'agreed');

CREATE TABLE help_requests (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author_id INT REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    help_type_id INT REFERENCES help_types(id) ON DELETE CASCADE NOT NULL,
    description VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    req_date DATE NOT NULL,
    status status_enum DEFAULT "active" NOT NULL
);