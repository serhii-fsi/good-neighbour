import db from "../../db/connection";
import { errors } from "../../common/errors/errors";
import { AppError } from "../../common/errors/AppError";

import { HelpOffer } from "../../db/seeds/data/types/data.types";

export const requesterUpdate = async (
    help_request_id: number,
    AuthUserId: number,
    helpOfferBody: any
): Promise<any> => {
    const { status, helper_id } = helpOfferBody;

    const values = [status, helper_id, help_request_id];

    const query = `
    UPDATE 
        help_offers 
    SET status = $1 
    WHERE helper_id = $2 
    AND help_request_id = $3 
    RETURNING helper_id, help_request_id, status`;

    const { rows } = await db.query(query, values);
    return rows[0];
};
