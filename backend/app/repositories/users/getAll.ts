import db from "../../db/connection";

import { User } from "../../db/seeds/data/types/data.types";

export const getAll = async (): Promise<User[]> => {
    const { rows } = await db.query(
        "SELECT user_id, username, avatar_url, first_name, last_name, email, address, age, post_code, help_offered, help_requests FROM users;"
    );
    return rows;
};
