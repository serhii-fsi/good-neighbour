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

describe("create help offer", () => {
    test("201 - POST: Responds with a newly created help offer", async () => {
        const helpOfferBody = {
            help_request_id: 7,
            status: "active",
        };
        const {
            body: { newHelpOffer },
        } = await request(app).post("/api/users/9/help-offers").send(helpOfferBody).expect(201);
        expect(newHelpOffer).toMatchObject({
            helper_id: 9,
            help_request_id: 7,
            status: "active",
        });
    });

    test("400 - GET: Responds with appropriate error when invalid user_id provided", async () => {
        const helpOfferBody = {
            help_request_id: 2,
            status: "active",
        };
        const {
            body: {
                error: { message },
            },
        } = await request(app).post("/api/users/gthty/help-offers").send(helpOfferBody).expect(400);
        expect(message).toBe("Invalid input provided");
    });

    test("400 - GET: Responds with appropriate error when invalid body fields provided", async () => {
        const helpOfferBody = {
            status: "active",
        };
        const {
            body: {
                error: { message },
            },
        } = await request(app).post("/api/users/5/help-offers").send(helpOfferBody).expect(400);
        expect(message).toBe("Invalid input provided");
    });

    // test("404 - POST: Responds with appropriate error when nonexistent user_id provided", async () => {
    //     const helpOfferBody = {
    //         help_request_id: 2,
    //         status: "active",
    //     };
    //     const {
    //         body: {
    //             error: { message },
    //         },
    //     } = await request(app).post("/api/users/545/help-offers").send(helpOfferBody).expect(500);
    //     expect(message).toBe("User was not found");
    // });
});
