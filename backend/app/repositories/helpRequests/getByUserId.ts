import db from "../../db/connection";

import { HelpRequest } from "../../db/seeds/data/types/data.types";

export const getByUserId = async (user_id: string): Promise<any> => {
    // const userOffers = await db.query(
    //     `SELECT
    //         users.id AS user_id,
    //         users.first_name,
    //         users.last_name,
    //         help_offers.status,
    //         help_offers.helper_id,
    //         help_offers.help_request_id

    //     FROM
    //         users
    //     LEFT JOIN
    //         help_offers
    //     ON
    //         help_offers.helper_id = users.id
    //     WHERE
    //         users.id = $1`,
    //     [user_id]
    // );
    // const userRows = userOffers.rows;
    // const requestId = userRows.map(user => user.help_request_id);

    // let whereRequestVals: any = [];

    // if (requestId.length !== 0) {
    //     requestId.forEach((id, index) => whereRequestVals.push(`help_requests.id = $${index + 1}`))
    // }

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

    if (requestId.length !== 0) {
        requestId.forEach((id, index) =>
            whereOffersVals.push(`help_offers.help_request_id = $${index + 1}`)
        );
    }

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
    const offers = acceptedOffers.rows;

    return { requestsRows, offers };
};
