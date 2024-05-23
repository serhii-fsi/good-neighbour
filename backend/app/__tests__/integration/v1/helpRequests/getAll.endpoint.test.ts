import request from "supertest";
import app from "../../../../app";
import db from "../../../../db/connection";

import testData from "../../../../db/seeds/data/test";
import seed from "../../../../db/seeds/seed";

import { HelpRequest } from "../../../../db/seeds/data/types/data.types";

beforeEach(async () => {
    await seed(testData);
});

afterAll(async () => {
    await db.end();
});

describe("HelpRequests Array Endpoint", () => {
    test("200 - GET: Responds with an array of all help requests", async () => {
        const {
            body: { helpRequests },
        } = await request(app).get("/api/help-requests").expect(200);
        helpRequests.forEach((request: HelpRequest[]) => {
            expect(request).toHaveProperty("title");
            expect(request).toHaveProperty("author_id");
            expect(request).toHaveProperty("help_type_id");
            expect(request).toHaveProperty("description");
            expect(request).toHaveProperty("created_at");
            expect(request).toHaveProperty("first_name");
            expect(request).toHaveProperty("last_name");
            expect(request).toHaveProperty("post_code");
            expect(request).toHaveProperty("name");
        });
    });
});
