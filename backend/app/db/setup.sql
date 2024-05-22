-- Drop existing databases if they exist
DROP DATABASE IF EXISTS nc_good_neighbour_test;
DROP DATABASE IF EXISTS nc_good_neighbour;

-- Create new databases
CREATE DATABASE nc_good_neighbour_test;
CREATE DATABASE nc_good_neighbour;

-- Connect to the nc_good_neighbour_test database and set up ENUM type
\c nc_good_neighbour_test

CREATE TYPE REQUEST_STATUS AS ENUM ('active', 'completed', 'closed', 'agreed');
CREATE TYPE OFFER_STATUS AS ENUM ('accepted', 'declined', 'active');

-- Connect to the nc_good_neighbour database and set up ENUM type
\c nc_good_neighbour

CREATE TYPE REQUEST_STATUS AS ENUM ('active', 'completed', 'closed', 'agreed');
CREATE TYPE OFFER_STATUS AS ENUM ('accepted', 'declined', 'active');
