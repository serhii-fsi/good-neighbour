import express from "express";
const router = express.Router();

import * as userRoutes from "../controllers/users/index";
import * as helpRequestRoutes from "../controllers/helpRequests/index";
import * as typeRoutes from "../controllers/types/index";

router.get("/", (req, res, next) => {
    res.status(200).send({ message: "welcome to the Good Neighbour API" });
});

// * Users
router.get("/api/users", userRoutes.create);
router.get("/api/users/:user_id", userRoutes.getById);
router.delete("/api/users", userRoutes.remove);
router.patch("/api/users", userRoutes.update);
router.post("/api/users", userRoutes.create);

// * Help requests
router.get("/api/help-requests", helpRequestRoutes.create);
router.get("/api/help-requests/:help_request_id", helpRequestRoutes.getById);
router.delete("/api/help-requests", helpRequestRoutes.remove);
router.patch("/api/help-requests", helpRequestRoutes.update);
router.post("/api/help-requests", helpRequestRoutes.create);

// * Types
router.get("/api/types", typeRoutes.getAll);

export default router;
