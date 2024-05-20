DROP TABLE IF EXISTS types;

CREATE TABLE types (
    type_id SERIAL PRIMARY KEY,
    type_name VARCHAR NOT NULL,
    type_body VARCHAR NOT NULL
);