import request from "supertest";
import app from "../../../../app/app";
import db from "../../../../app/db/connection";

import testData from "../../../../app/db/seeds/data/test";
import seed from "../../../../app/db/seeds/seed";

import { HelpOffer } from "../../../../app/db/seeds/data/types/data.types";

beforeEach(async () => {
    await seed(testData);
});

afterAll(async () => {
    await db.end();
});

describe("GET - /api/help-requests/:help_request_id/help-offers", () => {

    test("200 - GET: Responds with an array of help offer objects that have the help_request_id", async () => {
        const {
            body: { helpOffers }
        } = await request(app).get("/api/help-requests/9/help-offers").expect(200);
        helpOffers.forEach((offer: HelpOffer) => {
            expect(offer).toHaveProperty("user_id");
            expect(offer).toHaveProperty("first_name");
            expect(offer).toHaveProperty("address");
            expect(offer).toHaveProperty("email");
            expect(offer).toHaveProperty("phone_number");
            expect(offer.help_request_id).toBe(9);
            expect(offer).toHaveProperty("status");
        });
    });

    test("404 - GET: Responds with appropriate error when nonexistent help_request_id provided", async () => {
        const {
            body: {
                error: { message },
            },
        } = await request(app).get("/api/help-requests/15/help-offers").expect(404);
        expect(message).toBe("Help request was not found");
    });

    test("404 - GET: Responds with appropriate error when invalid help_request_id provided", async () => {
        const {
            body: {
                error: { message },
            },
        } = await request(app).get("/api/help-requests/gfrf/help-offers").expect(400);
        expect(message).toBe("Invalid input provided");
    });

    test("200 - GET: Responds with an empty array when help_request_id provided has no help offers associated with it", async () => {
        const {
            body: { helpOffers }
        } = await request(app).get("/api/help-requests/3/help-offers").expect(200);
        expect(helpOffers).toEqual([]);
    });
})