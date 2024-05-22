import express from "express";
const router = express.Router();

import * as usersController from "../controllers/users";
import * as helpRequestsController from "../controllers/helpRequests";
import * as typesController from "../controllers/types";

router.get("/", (req, res, next) => {
    res.status(200).send({ message: "welcome to the Good Neighbour API" });
});

// * Users
router.get("/api/users", usersController.getAll);
router.get("/api/users/:user_id", usersController.getById);
// router.delete("/api/users/:user_id", usersController.remove);
router.patch("/api/users/:user_id", usersController.update);
router.post("/api/users", usersController.create);

// * Help requests
router.get("/api/help-requests", helpRequestsController.getAll);
router.get("/api/help-requests/:help_request_id", helpRequestsController.getById);
router.delete("/api/help-requests/:help_request_id", helpRequestsController.remove);
router.patch("/api/help-requests/:help_request_id", helpRequestsController.update);
router.post("/api/help-requests", helpRequestsController.create);

// * Types
router.get("/api/types", typesController.getAll);

export default router;
