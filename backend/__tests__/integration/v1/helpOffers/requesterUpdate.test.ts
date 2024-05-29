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

describe("update HelpOffer as help request author", () => {
    test("200 - PATCH: Responds with an updated help offer status,", async () => {
        const helpOfferBody: Partial<HelpOffer> = {
            status: "active",
        };
        const {
            body: { updatedHelpOffer },
        } = await request(app).patch("/api/help-requests/10/help-offers/7").send(helpOfferBody).expect(200);
        expect(updatedHelpOffer).toMatchObject({
            helper_id: 7,
            help_request_id: 10,
            status: "active"
        });
    });
});
