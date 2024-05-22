import db from "../../db/connection";

import { User } from "../../db/seeds/data/types/data.types";

export const getAll = async (): Promise<User[]> => {
    const { rows } = await db.query(
        "SELECT id, username, email, avatar_url, age, first_name, last_name, about, address, post_code, phone_number, additional_contacts, help_radius FROM users;"
    );
    return rows;
};
