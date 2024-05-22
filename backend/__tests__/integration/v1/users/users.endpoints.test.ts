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

describe("Users Endpoint", () => {
    test("200 - GET: Responds with an array of all users", async () => {
        const {
            body: { users },
        } = await request(app).get("/api/users").expect(200);
        users.forEach((user: User[]) => {
            expect(user).toHaveProperty("user_id");
            expect(user).toHaveProperty("first_name");
            expect(user).toHaveProperty("last_name");
            expect(user).toHaveProperty("email");
            expect(user).toHaveProperty("username");
            expect(user).toHaveProperty("address");
            expect(user).toHaveProperty("post_code");
            expect(user).toHaveProperty("avatar_url");
            expect(user).toHaveProperty("age");
            expect(user).toHaveProperty("help_offered");
            expect(user).toHaveProperty("help_requests");
        });
    });

    test("200 - GET: Responds with an article with corresponding id", async () => {
        const {
            body: { user },
        } = await request(app).get("/api/users/1").expect(200);
        expect(user).toMatchObject({
            user_id: 1,
            username: "Albert91",
            avatar_url: "https://avatars.githubusercontent.com/u/74740062",
            first_name: "Albert",
            last_name: "Mante",
            email: "Albert.Mante10@hotmail.com",
            address: "7 Allie Square",
            age: 30,
            post_code: "CV8 2SW",
            help_offered: 5,
            help_requests: 1,
        });
    });
});
