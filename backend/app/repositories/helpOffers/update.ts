import db from "../../db/connection";

import { HelpOffer } from "../../db/seeds/data/types/data.types";

export const update = async (user_id: string, helpOfferBody:any): Promise<HelpOffer> => {
    const {help_request_id, status} = helpOfferBody

    const values = [status, user_id, help_request_id]

    if(values.length ===0){
        const {rows} = await db.query(
           `SELECT helper_id, help_request_id, status, users.first_name, users.last_name, users.additional_contacts, users.post_code FROM help_offers LEFT JOIN users on users.id = help_offers.helper_id WHERE helper_id =$1, help_request_id=$2`, [user_id, help_request_id]
        )
        return rows[0]
    }
console.log(values)

    const query = `UPDATE help_offers SET status =$1 WHERE helper_id = $2 AND help_request_id=$3 RETURNING helper_id, help_request_id, status`

    const {rows} = await db.query(query, values)
    console.log(rows)
    return rows[0]

}

// UPDATE help_offers SET status = $1 " WHERE helper_id = $1, [1,2,3] 