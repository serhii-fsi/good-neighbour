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

describe("updateHelpRequest", () => {
    test("200 - PATCH: Responds with an updated help request title, type_id, description and req_date fields by corresponding id", async () => {
        const helpRequestBody: Partial<HelpRequest> = {
            title: "A pint of milk please",
            help_type_id: 2,
            description: "Can I just get a pint of gold top please?",
            req_date: "2024-05-23T10:27:31.575Z",
        };
        const {
            body: { updatedHelpRequest },
        } = await request(app).patch("/api/help-requests/3").send(helpRequestBody).expect(200);
        expect(updatedHelpRequest).toMatchObject({
            title: "A pint of milk please",
            help_type_id: 2,
            description: "Can I just get a pint of gold top please?",
            req_date: expect.any(String),
        });
    });
});
