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

describe("Removes a help request", () => {
    test("204 - DELETE removes a help request and responds with a 204", async () => {
    await request(app).delete("/api/help-requests/1").expect(204);
    })
})