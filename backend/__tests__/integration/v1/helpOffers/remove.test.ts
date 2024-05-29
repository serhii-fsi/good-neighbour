import request from "supertest";
import app from "../../../../app/app";
import db from "../../../../app/db/connection";

import testData from "../../../../app/db/seeds/data/test";
import seed from "../../../../app/db/seeds/seed";


beforeEach(async () => {
    await seed(testData);
});

afterAll(async () => {
    await db.end();
});

describe("Removes a help offer /help-requests/:help_request_id/help-offers", () => {
    test("204 - DELETE removes a help request and responds with a 204", async () => {
    await request(app).delete("/api/help-requests/9/help-offers").expect(204);
    })
})