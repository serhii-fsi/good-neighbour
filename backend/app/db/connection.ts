import { Pool, PoolConfig } from "pg";
import dotenv from "dotenv";

const ENV = process.env.NODE_ENV || "development";

dotenv.config({
    path: `${__dirname}/../../.env.${ENV}`,
});

if (!process.env.PGDATABASE && !process.env.DATABASE_URL) {
    throw new Error("PGDATABASE or DATABASE_URL not set");
}

const config: PoolConfig = {};

if (ENV === "production") {
    config.connectionString = process.env.DATABASE_URL;
    config.max = 2;
}

const db = new Pool(config);

export default db;
