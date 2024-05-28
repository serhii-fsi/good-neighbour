import db from "../../db/connection";
import { HelpRequest } from "../../db/seeds/data/types/data.types";

export const create = async (author_id: number, helpRequestBody: any): Promise<HelpRequest> => {
    const { title, help_type, description, req_date } = helpRequestBody;

    // Extra query to get type name soon will be deleted
    const helpTypeName = await db.query(
        `SELECT id, name FROM help_types
        WHERE help_types.name= $1`,
        [help_type]
    );

    const help_type_id = helpTypeName.rows[0].id;

    const values = [title, author_id, help_type_id, description, req_date];

    const query = `INSERT INTO help_requests (title, author_id, help_type_id, description, req_date) VALUES ($1, $2, $3, $4, $5) RETURNING id, title, author_id, help_type_id, description, req_date,  created_at, status;`;

    const { rows } = await db.query(query, values);

    return rows[0];
};
