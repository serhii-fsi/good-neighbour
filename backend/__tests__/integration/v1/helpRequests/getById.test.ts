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

describe("GET /api/help-requests/:help_request_id", () => {
    test("200 - GET responds with a singular help request associated with the help_request_id", async () => {
        const {
            body: { helpRequestById } ,
        } = await request(app).get("/api/help-requests/10").expect(200);
        expect(helpRequestById
            .request.id).toBe(10);
        expect(helpRequestById.request.title).toBe("sit");
        expect(helpRequestById.request).toHaveProperty("description");
        expect(helpRequestById.request).toHaveProperty("created_at");
        expect(helpRequestById.request).toHaveProperty("req_date");
        expect(helpRequestById.request.status).toBe("active");
        expect(helpRequestById.offers[0]).toHaveProperty("status");
        expect(helpRequestById.offers[0]).toHaveProperty("helper");
        helpRequestById.offers.forEach((off: any) => {
            expect(off.helper.id).toBe(7);
            expect(off.helper.first_name).toBe("Gloria");
            expect(off.helper.last_name).toBe("McKenzie");
        });
    });

    test("404 - GET: Responds with appropriate error when nonexistent help_request_id provided", async () => {
        const {
            body: {
                error: { message },
            },
        } = await request(app).get("/api/help-requests/15").expect(404);
        expect(message).toBe("Help request was not found");
    });

    test("404 - GET: Responds with appropriate error when invalid help_request_id provided", async () => {
        const {
            body: {
                error: { message },
            },
        } = await request(app).get("/api/help-requests/fgrg").expect(400);
        expect(message).toBe("Invalid input provided");
    });
});
