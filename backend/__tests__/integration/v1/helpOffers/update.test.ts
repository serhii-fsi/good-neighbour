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

describe("update HelpOffer", () => {
    test("200 - PATCH: Responds with an updated help offer status,", async () => {
        const helpOfferBody: Partial<HelpOffer> = {
            status: "accepted",
            help_request_id: 2
        };
        const {
            body: { updatedHelpOffer },
        } = await request(app).patch("/api/users/10/help-offers").send(helpOfferBody).expect(200);
        expect(updatedHelpOffer).toMatchObject({
            helper_id: 10,
            help_request_id: 2,
            status: "accepted"
        });
    });
});
