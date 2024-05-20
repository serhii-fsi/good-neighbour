import seed from "./seed";
import db from "../connection";

import testData from "./data/test/index";

const ENV = process.env.NODE_ENV || "development";

const devData: any[] = [];

const runSeed = async (data: any) => {
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
    runSeed(devData);
}
