CREATE TABLE help_offers (
    id SERIAL PRIMARY KEY,
    helper_id INT REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    help_request_id INT REFERENCES help_requests(id) ON DELETE CASCADE NOT NULL,
    status OFFER_STATUS DEFAULT 'active' NOT NULL
);