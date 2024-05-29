import db from "../../db/connection";


export const remove = async(help_request_id: number, AuthUserId: number) => {

    const query = `DELETE FROM help_offers WHERE help_request_id =$1 AND helper_id=$2`

   const result = await db.query(query, [help_request_id, AuthUserId])
    return result
}