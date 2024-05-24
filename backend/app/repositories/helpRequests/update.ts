import db from "../../db/connection";

import { HelpRequest } from "../../db/seeds/data/types/data.types";

export const update = async (
    help_request_id: string,
    helpRequestBody: any
): Promise<HelpRequest> => {
    const { title, help_type_id, description, req_date } = helpRequestBody;

    const updates = [];
    const values = [];

    if (title) {
        updates.push(`title =$${values.push(title)}`);
    }
    if (help_type_id) {
        updates.push(`help_type_id =$${values.push(help_type_id)}`);
    }
    if (description) {
        updates.push(`description =$${values.push(description)}`);
    }
    if (req_date) {
        updates.push(`req_date =$${values.push(req_date)}`);
    }
    values.push("active");

    if (updates.length === 0) {
        const { rows } = await db.query(
            "SELECT help_requests.id, title, author_id, help_type_id, help_requests.description, created_at, req_date, status, users.first_name, users.last_name, users.post_code, help_types.name, users.latitude, users.longitude FROM help_requests LEFT JOIN users on users.id = help_requests.author_id LEFT JOIN help_types on help_types.id = help_requests.help_type_id WHERE help_requests.id = $1",
            [help_request_id]
        );
        return rows[0];
    }
    const query = `UPDATE help_requests SET ${updates}, status =$5 WHERE id = ${help_request_id} RETURNING id, title, author_id, help_type_id, description, req_date, status, created_at`;

    const viewQuery = `SELECT help_requests.id, title, author_id, help_type_id, help_requests.description, created_at, help_requests.req_date, status, users.first_name, users.last_name, users.post_code, help_types.name, users.longitude, users.latitude FROM help_requests LEFT JOIN users on users.id = help_requests.author_id LEFT JOIN help_types on help_types.id = help_requests.help_type_id WHERE help_requests.id = ${help_request_id}`;

    const { rows } = await db.query(query, values);
    const viewRows = await db.query(viewQuery);
    return viewRows.rows[0];
};