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

describe("GETS all help requests associated with a user", () => {
    test("200 - GET: Responds with an array of all help requests associated with a user_id", async () => {
        const {
            body: { userHelpRequests },
        } = await request(app).get("/api/users/9/help-requests").expect(200);
        userHelpRequests.forEach((request: HelpRequest[]) => {
            userHelpRequests.forEach((offer: any) => {
                expect(offer.request).toHaveProperty("id");
                expect(offer.request).toHaveProperty("title");
                expect(offer.request).toHaveProperty("help_type");
                expect(offer.request).toHaveProperty("description");
                expect(offer.request).toHaveProperty("created_at");
                expect(offer.request).toHaveProperty("req_date");
                expect(offer.request).toHaveProperty("status");
                expect(offer.offers[0]).toHaveProperty("status");
                expect(offer.offers[0]).toHaveProperty("helper");
                offer.offers.forEach((off: any) => {
                    expect(typeof off.helper.id).toBe("number");
                    expect(typeof off.helper.first_name).toBe("string");
                    expect(typeof off.helper.last_name).toBe("string");
                });
            });
        })
    })
})