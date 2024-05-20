CREATE TABLE responses (
    res_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE NOT NULL,
    req_id INT REFERENCES requests(req_id) ON DELETE CASCADE NOT NULL,
    created_at TIMESTAMP NOT NULL,
    description VARCHAR NOT NULL,
    status VARCHAR NOT NULL
);