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

describe("GET - /api/users/:user_id/help-offers", () => {

    test("200 - GET: Responds with an array of objects that have request, requester, offer objects with the appropriate properties", async () => {
        const {
            body: { userHelpOffers }
        } = await request(app).get("/api/users/7/help-offers").expect(200);
        userHelpOffers.forEach((offer: any) => {
            expect(offer.request).toHaveProperty("id");
            expect(offer.request).toHaveProperty("title");
            expect(offer.request).toHaveProperty("help_type");
            expect(offer.request).toHaveProperty("description");
            expect(offer.request).toHaveProperty("created_at");
            expect(offer.request).toHaveProperty("req_date");
            expect(offer.request).toHaveProperty("status");
            expect(offer.requester).toHaveProperty("first_name");
            expect(offer.requester).toHaveProperty("last_name");
            expect(offer.requester).toHaveProperty("id");
            expect(offer.offers[0]).toHaveProperty("status");
            expect(offer.offers[0]).toHaveProperty("helper");
            offer.offers.forEach((off: any) => {
                expect(typeof off.helper.id).toBe("number");
                expect(typeof off.helper.first_name).toBe("string");
                expect(typeof off.helper.last_name).toBe("string");
            });
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