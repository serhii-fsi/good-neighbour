import seed from "./seeds/data/seed";
import db from "./connection";

const ENV = process.env.NODE_ENV || "development";

const testData: any[] = [];
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
