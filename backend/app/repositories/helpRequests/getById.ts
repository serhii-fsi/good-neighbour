import db from "../../db/connection";

export const getById = async (id: number): Promise<any> => {
    const helpRequestOffers = await db.query(
        `SELECT
            users.id AS user_id,
            users.first_name,
            users.last_name,
            users.address,
            users.postcode,
            users.phone_number,
            users.additional_contacts,
            help_offers.status,
            help_offers.helper_id,
            help_offers.help_request_id

        FROM
            help_offers
        JOIN
            users
        ON
            help_offers.helper_id = users.id
        WHERE 
            help_offers.help_request_id = $1`,

        [id]
    );
    const helpRequestOffersRows = helpRequestOffers.rows;

    const helpRequest = await db.query(
        `SELECT
        users.id,
        users.first_name,
        users.last_name,
        users.postcode,

        users.address,
        users.phone_number,
        users.additional_contacts,

        help_requests.author_id,
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

        [id]
    );
    const request = helpRequest.rows;

    return { request, helpRequestOffersRows };
};
