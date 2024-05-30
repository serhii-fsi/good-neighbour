import db from "../../db/connection";

import { HelpRequest } from "../../db/seeds/data/types/data.types";

export const update = async (
    help_request_id: string,
    helpRequestBody: any
): Promise<HelpRequest> => {
    const { title, help_type, description, req_date, status } = helpRequestBody;

    let help_type_id;

    if (help_type) {
        // Extra query to get type name soon will be deleted
        const helpTypeName = await db.query(
            `SELECT
                help_types.id
            FROM
                help_types
             WHERE help_types.name= $1`,
            [help_type]
        );

        help_type_id = helpTypeName.rows[0].id;
    }

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
    if (status) {
        updates.push(`status =$${values.push(status)}`);
    }

    if (updates.length === 0) {
        const { rows } = await db.query(
            `SELECT
                help_requests.id,
                title, author_id,
                help_type_id,
                help_requests.description,
                created_at,
                req_date,
                status,
                users.first_name,
                users.last_name,
                users.postcode,
                help_types.name,
                users.latitude,
                users.longitude
            FROM
                help_requests
            JOIN
                users
            ON
                users.id = help_requests.author_id
            JOIN
                help_types
            ON
                help_types.id = help_requests.help_type_id
            WHERE
                help_requests.id = $1`,
            [help_request_id]
        );
        return rows[0];
    }

    const query = `
        UPDATE
            help_requests SET ${updates}
        WHERE
            id = ${help_request_id}
        RETURNING
            id,
            title,
            author_id,
            help_type_id,
            description,
            req_date,
            status,
            created_at`;

    const viewQuery = `
        SELECT
            help_requests.id,
            title,
            author_id,
            help_types.name AS help_type,
            help_requests.description,
            created_at,
            help_requests.req_date,
            status
        FROM
            help_requests
        JOIN
            users
        ON
            users.id = help_requests.author_id
        JOIN
            help_types
        ON
            help_types.id = help_requests.help_type_id
        WHERE
            help_requests.id = ${help_request_id}`;

    const { rows } = await db.query(query, values);

    const viewRows = await db.query(viewQuery);

    return viewRows.rows[0];
};
