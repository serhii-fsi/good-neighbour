CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(24),
    email VARCHAR(255),
    avatar_url VARCHAR(100),
    age INT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    about VARCHAR(500),
    address VARCHAR(100) NOT NULL,
    post_code VARCHAR(16) NOT NULL,
    phone_number VARCHAR(24),
    additional_contacts VARCHAR(500),
    help_radius INT DEFAULT 1000 NOT NULL,
    help_offered INT DEFAULT 0,
    help_requests INT DEFAULT 0
);
