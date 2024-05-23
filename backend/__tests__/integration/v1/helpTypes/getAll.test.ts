import request from "supertest";
import app from "../../../../app/app";
import db from "../../../../app/db/connection";

import testData from "../../../../app/db/seeds/data/test";
import seed from "../../../../app/db/seeds/seed";

import { HelpType } from "../../../../app/db/seeds/data/types/data.types";

beforeEach(async () => {
    await seed(testData);
});

afterAll(async () => {
    await db.end();
});

describe("getAllHelpTypes", () => {
    test("200 - GET: Responds with an array of all help types", async () => {
        const {
            body: { helpTypes },
        } = await request(app).get("/api/help-types").expect(200);
        helpTypes.forEach((helpType: HelpType[]) => {
            expect(helpType).toHaveProperty("id");
            expect(helpType).toHaveProperty("name");
            expect(helpType).toHaveProperty("description");
        });
    });
});
