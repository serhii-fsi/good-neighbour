import request from "supertest";
import app from "../../../../app/app";
import db from "../../../../app/db/connection";

import testData from "../../../../app/db/seeds/data/test";
import seed from "../../../../app/db/seeds/seed";

import { User } from "../../../../app/db/seeds/data/types/data.types";

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
});
