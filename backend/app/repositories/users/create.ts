import db from "../../db/connection";
import { User } from "../../db/seeds/data/types/data.types";

export const create = async (userBody: User): Promise<User> => {
    //  Mandatory fields
    const { first_name, last_name, address, postcode, longitude, latitude, help_radius } =
        userBody;

    // Optional fields
    const { username, email, avatar_url, age, about, phone_number, additional_contacts } = userBody;

    // Validation
    if (
        !first_name ||
        !last_name ||
        !address ||
        !postcode ||
        !longitude ||
        !latitude ||
        !help_radius
    ) {
        throw new Error(
            "Mandatory fields (first_name, last_name, address, postcode, longitude, latitude) are required."
        );
    }

    const values = [
        username,
        email,
        avatar_url,
        age,
        first_name,
        last_name,
        about,
        address,
        postcode,
        phone_number,
        additional_contacts,
        help_radius,
        longitude,
        latitude,
    ];

    const query = `
    INSERT INTO users 
    (username, email, avatar_url, age, first_name, last_name, about, address, postcode, phone_number, additional_contacts, help_radius, longitude, latitude)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
    RETURNING id, username, email, avatar_url, age, first_name, last_name, about, address, postcode, phone_number, additional_contacts, help_radius, longitude, latitude;
  `;

    const { rows } = await db.query(query, values);
    return rows[0];
};
