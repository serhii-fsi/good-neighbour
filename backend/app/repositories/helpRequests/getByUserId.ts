import db from "../../db/connection";

import { HelpRequest } from "../../db/seeds/data/types/data.types";

export const getByUserId = async (user_id: number): Promise<any> => {
    const helpRequests = await db.query(
        `SELECT
        help_requests.id AS help_request_id,
        help_requests.title,
        help_requests.description,
        help_requests.created_at,
        help_requests.req_date,
        help_requests.status,
        help_requests.help_type_id,
        help_types.name

        FROM
            help_requests

        LEFT JOIN
            help_types
        ON
            help_types.id = help_requests.help_type_id
        WHERE help_requests.author_id =$1`,

        [user_id]
    );
    const requestsRows = helpRequests.rows;
    const requestId = requestsRows.map((request) => request.help_request_id);

    let whereOffersVals: any = [];

    const offers = []


    if (requestId.length !== 0) {
        requestId.forEach((id, index) =>
            whereOffersVals.push(`help_offers.help_request_id = $${index + 1}`)
        );
        const acceptedOffers = await db.query(
            `SELECT
            help_offers.status,
            help_offers.help_request_id,
            users.id,
            users.first_name,
            users.last_name
    
            FROM
                help_offers
            LEFT JOIN
                users
            ON
                users.id = help_offers.helper_id
            WHERE ${whereOffersVals.join(` OR `)}`,
    
            requestId
        );
        offers.push(...acceptedOffers.rows)
    }

    return { requestsRows, offers };
};
