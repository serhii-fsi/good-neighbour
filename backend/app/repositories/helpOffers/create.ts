import db from "../../db/connection";

import { HelpOffer } from "../../db/seeds/data/types/data.types";

export const create = async (helper_id: number, helpOfferBody: HelpOffer): Promise<HelpOffer> => {
    const { status, help_request_id } = helpOfferBody;

    const query = `INSERT INTO help_offers
    (helper_id, help_request_id, status)
    VALUES ($1, $2, $3)
    RETURNING helper_id, help_request_id, status
    `;

    const values = [helper_id, help_request_id, status];

    console.log({ helper_id, help_request_id, status });
    const { rows } = await db.query(query, values);

    return rows[0];
};
