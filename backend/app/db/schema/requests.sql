DROP TABLE IF EXISTS requests;

CREATE TABLE requests (
    req_id SERIAL PRIMARY KEY,
    title VARCHAR NOT NULL,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE NOT NULL,
    type_id INT REFERENCES types(type_id) ON DELETE CASCADE NOT NULL,
    body VARCHAR NOT NULL,
    created_at TIMESTAMP NOT NULL,
    req_date TIMESTAMP NOT NULL,
    req_status VARCHAR NOT NULL

);