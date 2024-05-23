import { Request, Response, NextFunction } from "express";

import * as helpRequestsService from "../../../../services/helpRequests/getById";
import { AppError } from "../../../../common/errors/AppError";
import { errors } from "../../../../common/errors/errors";

export const getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const help_request_id = Number(req.params.help_request_id);

        if (isNaN(help_request_id)) {
            throw new AppError(errors.VALIDATION_ERROR, "Invalid help request id provided");
        }
        const helpRequest = await helpRequestsService.getById(help_request_id);
        res.status(200).send({ helpRequest });
    } catch (error) {
        next(error);
    }
};

/**
 * @swagger
 * /api/help-requests/:help_request_id:
 *   get:
 *     summary: Get help request by help_id
 *     tags: [HelpRequest]
 *     description: Retrieve a help request with the corresponding id.
 *     responses:
 *       200:
 *         description: Responds with a help request with the corresponding id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HelpRequest'
 *       404:
 *         $ref: '#/components/responses/404'
 */
