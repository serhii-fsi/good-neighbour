import db from "../../db/connection";

import { HelpRequest } from "../../db/seeds/data/types/data.types";

export const getAll = async (): Promise<any[]> => {
    const { rows } = await db.query(
        "SELECT help_requests.id, title, author_id, help_types.name AS help_type, help_requests.description, created_at, req_date, status, users.first_name, users.last_name, users.postcode FROM help_requests LEFT JOIN users on users.id = help_requests.author_id LEFT JOIN help_types on help_types.id = help_requests.help_type_id"
    );
    return rows;
};
