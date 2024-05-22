import format from "pg-format";
import { readFileSync } from "fs";
import path from "path";

import { Data } from "./data/types/data.types";

import db from "../connection";

const schemaFiles = [
    "users.sql",
    "help_types.sql",
    "help_requests.sql",
    "help_offers.sql",
    "comments.sql",
];

const createTables = async () => {
    await db.query(`
    DROP TABLE IF EXISTS comments;
    DROP TABLE IF EXISTS help_offers;
    DROP TABLE IF EXISTS help_requests;
    DROP TABLE IF EXISTS help_types;
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
        "INSERT INTO users (username, email, avatar_url, age, first_name, last_name, about, address, post_code, phone_number, additional_contacts, help_radius) VALUES %L;",
        usersData.map(
            ({
                username,
                email,
                avatar_url,
                age,
                first_name,
                last_name,
                about,
                address,
                post_code,
                phone_number,
                additional_contacts,
                help_radius,
                help_offers_count,
                help_requests_count,
            }) => [
                username,
                email,
                avatar_url,
                age,
                first_name,
                last_name,
                about,
                address,
                post_code,
                phone_number,
                additional_contacts,
                help_radius,
            ]
        )
    );

    const insertHelpRequestsDataStr = format(
        "INSERT INTO help_requests (title, author_id, help_type_id, description, created_at, req_date, status) VALUES %L",
        helpRequestsData.map(
            ({ title, author_id, help_type_id, description, created_at, req_date, status }) => [
                title,
                author_id,
                help_type_id,
                description,
                created_at,
                req_date,
                status,
            ]
        )
    );

    const insertHelpOffersDataStr = format(
        "INSERT INTO help_offers (helper_id, help_request_id, status) VALUES %L",
        helpOffersData.map(({ helper_id, help_request_id, status }) => [
            helper_id,
            help_request_id,
            status,
        ])
    );

    const insertCommentsDataStr = format(
        "INSERT INTO comments (author_id, help_request_id, created_at, description) VALUES %L",
        commentsData.map(({ author_id, help_request_id, created_at, description }) => [
            author_id,
            help_request_id,
            created_at,
            description,
        ])
    );

    const insertHelpTypeDataStr = format(
        "INSERT INTO help_types (name, description) VALUES %L",
        typesData.map(({ name, description }) => [name, description])
    );

    await db.query(insertUsersStr);
    await db.query(insertHelpTypeDataStr);
    await db.query(insertHelpRequestsDataStr);
    await db.query(insertHelpOffersDataStr);
    await db.query(insertCommentsDataStr);
};

export default seed;
