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

describe("updateUser", () => {
    test("200 - PATCH: Responds with an updated email and phone_number user's fields by corresponding id", async () => {
        const userBody: Partial<User> = {
            email: "maxbmaapc@mail.ru",
            phone_number: "079170986789",
        };
        const {
            body: { updatedUser },
        } = await request(app).patch("/api/users/1").send(userBody).expect(200);
        expect(updatedUser).toMatchObject({
            email: "maxbmaapc@mail.ru",
            phone_number: "079170986789",
        });
    });
});
