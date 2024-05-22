import db from "../../db/connection"

import {HelpRequest} from "../../db/seeds/data/types/data.types";


export const getAll = async (): Promise<HelpRequest[]> => {
    const {rows} = await db.query(
        "SELECT id, user_id, type_id, title, description, created_at, req_date, post_code, status FROM help_requests"
    )
    return rows
}

