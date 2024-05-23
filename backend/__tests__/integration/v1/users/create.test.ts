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

describe("createUser", () => {
    test("201 - POST: Responds with a newly created user", async () => {
        const userBody: User = {
            username: "maxbmaapc",
            email: "maxbmaapc@mail.ru",
            avatar_url:
                "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1215.jpg",
            age: 26,
            first_name: "John",
            last_name: "Doe",
            about: "Censura basium carcer. Delicate alius aperiam color virga cruentus traho. Correptius vesper supplanto voluptatum.",
            address: "120 College Place",
            post_code: "NW1 0DJ",
            phone_number: "079170986789",
            additional_contacts:
                "basium carcer. Delicate alius aperiam color virga cruentus traho. Correptius vesper supplanto voluptatum.",
            help_radius: 1500,
            latitude: 51.5155,
            longitude: -0.0722,
        };

        const {
            body: { newUser },
        } = await request(app).post("/api/users").send(userBody).expect(201);

        expect(newUser).toMatchObject({
            id: expect.any(Number),
            username: "maxbmaapc",
            email: "maxbmaapc@mail.ru",
            avatar_url:
                "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1215.jpg",
            age: 26,
            first_name: "John",
            last_name: "Doe",
            about: "Censura basium carcer. Delicate alius aperiam color virga cruentus traho. Correptius vesper supplanto voluptatum.",
            address: "120 College Place",
            post_code: "NW1 0DJ",
            phone_number: "079170986789",
            additional_contacts:
                "basium carcer. Delicate alius aperiam color virga cruentus traho. Correptius vesper supplanto voluptatum.",
            help_radius: 1500,
            latitude: 51.5155,
            longitude: -0.0722,
        });
    });
});
