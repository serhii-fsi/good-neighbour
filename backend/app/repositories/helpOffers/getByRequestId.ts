import db from "../../db/connection";

import { HelpOffer } from "../../db/seeds/data/types/data.types";

export const getByRequestId = async (help_request_id: number): Promise<HelpOffer[]> => {
    // Sql query is subject to change
    const { rows } = await db.query(
        `SELECT
            users.id AS user_id,
            users.first_name,
            users.address,
            users.email,
            users.phone_number,
            help_requests.id AS help_request_id,
            help_offers.status
        FROM
            users
        LEFT JOIN
            help_offers
        ON
            help_offers.helper_id = users.id
        LEFT JOIN
            help_requests
        ON
            help_requests.id = help_offers.help_request_id
        WHERE
            help_requests.id = $1`,
        [help_request_id]
    );
    return rows;
};
