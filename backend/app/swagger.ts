import swaggerUi from "swagger-ui-express";
import { Router } from "express";
import swaggerJSDoc from "swagger-jsdoc";

const router = Router();

// Swagger configuration
const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Good Neighbour API Documentation",
            version: "1.0.0",
            description: "API documentation generated with Swagger",
        },
        servers: [
            {
                url: "http://localhost:8000",
                description: "Development server",
            },
        ],
    },
    apis: ["./app/api/v1/controllers/**/*.ts"], // Path to the API routes/controllers
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Endpoint to serve Swagger UI
router.use("/api-docs", swaggerUi.serve);
router.get("/api-docs", swaggerUi.setup(swaggerSpec));

export default router;
