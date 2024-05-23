import db from "../../db/connection";
import { HelpRequest } from "../../db/seeds/data/types/data.types";

export const create = async (helpRequestBody: HelpRequest): Promise<HelpRequest> => {
    const { title, author_id, help_type_id, description, req_date, status, created_at } =
        helpRequestBody;

    const values = [
        title,
        author_id,
        help_type_id,
        description,
        req_date,
        status,
        created_at
    ]

    const query = `INSERT INTO help_requests (title, author_id, help_type_id, description, req_date, status, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id, title, author_id, help_type_id, description, req_date, status, created_at`;

    const viewQuery = `SELECT help_requests.id, title, author_id, help_type_id, help_requests.description, created_at, req_date, status, users.first_name, users.last_name, users.post_code, help_types.name, users.longitude, users.latitude FROM help_requests LEFT JOIN users on users.id = help_requests.author_id LEFT JOIN help_types on help_types.id = help_requests.help_type_id WHERE help_requests.id = $1`

    const {rows} = await db.query(query, values)
    const id = await [rows[0].id]
    const viewRows = await db.query(viewQuery, id)
    return viewRows.rows[0]
};



