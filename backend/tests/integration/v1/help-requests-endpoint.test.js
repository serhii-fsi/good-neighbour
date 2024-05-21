import data from "../../db/seeds/data/types/data.types.ts"
import seed from "../../db/seeds/data/seed.ts"
import db from "../../db/connection.ts"

beforeEach(() => {
    return seed(data)
})

afterAll(() => {
    return db.end()
})

describe("Help-requests endpoint", () => {
    test("200 GET: responds with an array of all help requests", aysnc () => {
        const {
            body: {}
        }
    })
})