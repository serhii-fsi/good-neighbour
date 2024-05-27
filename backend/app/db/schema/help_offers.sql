CREATE TABLE help_offers (
    helper_id INT REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    help_request_id INT REFERENCES help_requests(id) ON DELETE CASCADE NOT NULL,
    status OFFER_STATUS DEFAULT 'active' NOT NULL,
    PRIMARY KEY (helper_id, help_request_id)
);
