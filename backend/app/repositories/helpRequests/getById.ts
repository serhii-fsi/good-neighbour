import db from "../../db/connection";

import { HelpRequest } from "../../db/seeds/data/types/data.types";

export const getById = async (id: number): Promise<HelpRequest> => {
    const { rows } = await db.query(
        "SELECT help_requests.id, title, author_id, help_type_id, help_requests.description, created_at, req_date, status, users.first_name, users.last_name, users.post_code, help_types.name, users.latitude, users.longitude FROM help_requests LEFT JOIN users on users.id = help_requests.author_id LEFT JOIN help_types on help_types.id = help_requests.help_type_id WHERE help_requests.id = $1",
        [id]
    );

    return rows[0];
};
