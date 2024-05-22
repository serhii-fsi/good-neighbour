import format from "pg-format";
import { readFileSync } from "fs";
import path from "path";

import { Data } from "./data/types/data.types";

import db from "../connection";

const schemaFiles = [
    "users.sql",
    "types.sql",
    "help_requests.sql",
    "help_offers.sql",
    "comments.sql",
];

const createTables = async () => {
    await db.query(`
    DROP TABLE IF EXISTS comments;
    DROP TABLE IF EXISTS help_offers;
    DROP TABLE IF EXISTS help_requests;
    DROP TABLE IF EXISTS types;
    DROP TABLE IF EXISTS users;
`);

    for (const file of schemaFiles) {
        const filePath = path.join(`${__dirname}/../../db/schema`, file);
        const sql = readFileSync(filePath, "utf-8");
        // console.log(`Executing ${file}...`);
        await db.query(sql);
        // console.log(`${file} executed successfully.`);
    }
};

const seed = async ({
    usersData,
    typesData,
    helpRequestsData,
    commentsData,
    helpOffersData,
}: Data): Promise<void> => {
    await createTables();

    const insertUsersStr = format(
        "INSERT INTO users (first_name, last_name, about, phone_number, email, username, address, post_code, avatar_url, age, help_offered, help_requests) VALUES %L;",
        usersData.map(
            ({
                first_name,
                last_name,
                about,
                phone_number,
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
                about,
                phone_number,
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
        "INSERT INTO help_requests (user_id, type_id, title, description, created_at, req_date, post_code, status) VALUES %L",
        helpRequestsData.map(
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

    const insertCommentsDataStr = format(
        "INSERT INTO comments (user_id, help_request_id, created_at, description) VALUES %L",
        commentsData.map(({ user_id, help_request_id, body_response, created_at }) => [
            user_id,
            help_request_id,
            created_at,
            body_response,
        ])
    );

    const insertHelpOffersDataStr = format(
        "INSERT INTO help_offers (user_id, help_request_id, status) VALUES %L",
        helpOffersData.map(({ user_id, help_request_id, status }) => [
            user_id,
            help_request_id,
            status,
        ])
    );
    await db.query(insertUsersStr);
    await db.query(insertHelpTypeDataStr);
    await db.query(insertRequestsDataStr);
    await db.query(insertHelpOffersDataStr);
    await db.query(insertCommentsDataStr);
};

export default seed;
