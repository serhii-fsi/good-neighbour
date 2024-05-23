import db from "../../db/connection";

import { HelpType } from "../../db/seeds/data/types/data.types";

export const getAll = async (): Promise<HelpType[]> => {
    const { rows } = await db.query("SELECT id, name, description FROM help_types;");
    return rows;
};
