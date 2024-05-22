CREATE TYPE status_enum AS ENUM ('accepted', 'declined', 'active',);

CREATE TABLE help_offers (
    id SERIAL PRIMARY KEY,
    helper_id INT REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    help_request_id INT REFERENCES help_requests(id) ON DELETE CASCADE NOT NULL,
    status status_enum DEFAULT "active" NOT NULL
);