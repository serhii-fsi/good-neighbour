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
            body: { helpRequest },
        } = await request(app).get("/api/help-requests/1").expect(200);
        expect(helpRequest).toMatchObject({
            id: 1,
            title: "decet",
            author_id: 10,
            help_type_id: 5,
            description:
                "Temptatio demonstro acidus tredecim decerno hic antea veniam. Illum comedo sordeo uterque quod quae sortitus denuncio aperte curto. Adipiscor officia illo cuius agnosco spoliatio autus.",
            created_at: expect.any(String),
            req_date: expect.any(String),
            status: "active",
            first_name: "Makenna",
            last_name: "Wuckert",
            postcode: expect.any(String),
            name: "DIY",
            latitude: 51.54144,
            longitude: 0.07218,
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
