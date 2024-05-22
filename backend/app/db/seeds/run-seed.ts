import seed from "./seed";
import db from "../connection";

import testData from "./data/test";
import { Data } from "./data/types/data.types";

const ENV = process.env.NODE_ENV || "development";

// const devData: any[] = [];

const runSeed = async (data: Data) => {
    try {
        await seed(data);
    } catch (error) {
        console.error("Error seeding data:", error);
    } finally {
        await db.end();
    }
};

if (ENV === "test") {
    runSeed(testData);
} else {
    // runSeed(devData);
}

export default runSeed;
