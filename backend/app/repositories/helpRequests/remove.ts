import db from "../../db/connection";


export const remove = async(help_request_id: any) => {

    const query = `DELETE FROM help_requests WHERE id =$1`

   const result = await db.query(query, [help_request_id])
    return result
}