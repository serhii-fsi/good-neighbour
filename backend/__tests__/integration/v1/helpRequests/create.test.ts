import request from "supertest";
import app from "../../../../app/app";
import db from "../../../../app/db/connection";

import testData from "../../../../app/db/seeds/data/test";
import seed from "../../../../app/db/seeds/seed";

import { HelpRequest } from "../../../../app/db/seeds/data/types/data.types";

beforeEach(async () => {
    await seed(testData);
});

afterAll(async () => {
    await db.end();
});

describe("create new Help Requests", () => {
    test("201 - POST: Responds with a newly created help request", async () => {
        const helpRequestBody: HelpRequest = {
            title: "A pint of milk please",
            author_id: 1,
            help_type_id: 1,
            description:
                "I have difficulty getting to the shop, could someone grab me a pint of milk when they next go please?",
            created_at: "2024-05-21T17:31:15.482Z",
            req_date: "2024-05-21T17:31:15.482Z",
            status: "active",
        };

        const {
            body: { newHelpRequest },
        } = await request(app).post("/api/help-requests").send(helpRequestBody).expect(201);

        expect(newHelpRequest).toMatchObject({
            id: 11,
            title: "A pint of milk please",
            author_id: 1,
            help_type_id: 1,
            description:
                "I have difficulty getting to the shop, could someone grab me a pint of milk when they next go please?",
            req_date: "2024-05-20T23:00:00.000Z",
            status: "active",
            first_name: "Irwin",
            last_name: "Howe",
            post_code: "E1 6AN",
            name: "Shopping",
            latitude: 51.5155,
            longitude: -0.0722,
        });
    });
});
