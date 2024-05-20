import format from "pg-format";
import { readFileSync } from "fs";
import path from "path";

import db from "../../connection";

const schemaFiles = ["users.sql", "types.sql", "requests.sql", "responses.sql"];

const createTables = async () => {
    for (const file of schemaFiles) {
        const filePath = path.join(`${__dirname}/../../../db/schema`, file);
        const sql = readFileSync(filePath, "utf-8");
        console.log(`Executing ${file}...`);
        await db.query(sql);
        console.log(`${file} executed successfully.`);
    }
};

const seed = async (seedData: any): Promise<void> => {
    await createTables();
};

export default seed;
