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

describe("getUserById", () => {
    test("200 - GET: Responds with a user with corresponding id", async () => {
        const {
            body: { user },
        } = await request(app).get("/api/users/1").expect(200);
        expect(user).toMatchObject({
            id: 1,
            username: "Irwin40",
            email: "Irwin_Howe23@hotmail.com",
            avatar_url: expect.any(String),
            age: 64,
            first_name: "Irwin",
            last_name: "Howe",
            about: expect.any(String),
            post_code: expect.any(String),
            phone_number: "01281 97323",
            additional_contacts: expect.any(String),
            help_radius: 551,
        });
    });

    test("404 - GET: Responds with appropriate error when nonexistent user_id provided", async () => {
        const {
            body: {
                error: { message },
            },
        } = await request(app).get("/api/users/15").expect(404);
        expect(message).toBe("User was not found");
    });

    test("400 - GET: Responds with appropriate error when invalid user_id provided", async () => {
        const {
            body: {
                error: { message },
            },
        } = await request(app).get("/api/users/fgrg").expect(400);
        expect(message).toBe("Invalid input provided");
    });
});
