import format from "pg-format";
import { readFileSync } from "fs";
import path from "path";

import { TestData } from "./data/types/data.types";

import db from "../connection";

const schemaFiles = ["users.sql", "types.sql", "requests.sql", "responses.sql"];

const createTables = async () => {
    await db.query(`
  DROP TABLE IF EXISTS responses;
  DROP TABLE IF EXISTS requests;
  DROP TABLE IF EXISTS types;
  DROP TABLE IF EXISTS users;
`);

    for (const file of schemaFiles) {
        const filePath = path.join(`${__dirname}/../../db/schema`, file);
        const sql = readFileSync(filePath, "utf-8");
        console.log(`Executing ${file}...`);
        await db.query(sql);
        console.log(`${file} executed successfully.`);
    }
};

const seed = async ({
    usersData,
    typesData,
    requestsData,
    responsesData,
}: TestData): Promise<void> => {
    await createTables();

    const insertUsersStr = format(
        "INSERT INTO users (first_name, last_name, email, username, address, post_code, avatar_url, age, help_offered, help_requests) VALUES %L;",
        usersData.map(
            ({
                first_name,
                last_name,
                email,
                username,
                address,
                post_code,
                avatar_url,
                age,
                help_offers_count,
                help_requests_count,
            }) => [
                first_name,
                last_name,
                email,
                username,
                address,
                post_code,
                avatar_url,
                age,
                help_offers_count,
                help_requests_count,
            ]
        )
    );

    const insertHelpTypeDataStr = format(
        "INSERT INTO types (type_name, type_description) VALUES %L",
        typesData.map(({ type, description }) => [type, description])
    );

    const insertRequestsDataStr = format(
        "INSERT INTO requests (user_id, type_id, title, description, created_at, req_date, post_code, status) VALUES %L",
        requestsData.map(
            ({ user_id, type_id, title, description, created_at, req_date, post_code, status }) => [
                user_id,
                type_id,
                title,
                description,
                created_at,
                req_date,
                post_code,
                status,
            ]
        )
    );

    const insertResponsesDataStr = format(
        "INSERT INTO responses (user_id, req_id, created_at, description, status) VALUES %L",
        responsesData.map(({ user_id, request_id, body_response, created_at, status }) => [
            user_id,
            request_id,
            created_at,
            body_response,
            status,
        ])
    );

    await db.query(insertUsersStr);
    await db.query(insertHelpTypeDataStr);
    await db.query(insertRequestsDataStr);
    await db.query(insertResponsesDataStr);
};

export default seed;
