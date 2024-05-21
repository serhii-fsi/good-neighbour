import express, { Application } from "express";
import cors from "cors";

import errorHandler from "./middlewares/errorHandler";
import routes from "./api/v1/routes/index";

const app: Application = express();

// * Parser
app.use(cors());
app.use(express.json());

// * Route
app.use(routes);

// * Custom Error Handler
app.use(errorHandler);

export default app;
