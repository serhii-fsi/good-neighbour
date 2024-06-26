import { Request, Response, NextFunction } from "express";

import * as helpRequestsService from "../../../../services/helpRequests/getById";
import { AppError } from "../../../../common/errors/AppError";
import { errors } from "../../../../common/errors/errors";

export const getById = async (req: Request, res: Response, next: NextFunction) => {
    const AuthUserId = Number(req.header("X-User-ID"));

    try {
        const help_request_id = Number(req.params.help_request_id);
        console.log(help_request_id);

        if (isNaN(help_request_id)) {
            throw new AppError(errors.VALIDATION_ERROR, "Invalid help request id provided");
        }

        const helpRequest = await helpRequestsService.getById(help_request_id, AuthUserId);

        res.status(200).send({ helpRequest });
    } catch (error) {
        next(error);
    }
};

/**
 * @swagger
 * /api/help-requests/{help_request_id}:
 *   get:
 *     summary: Get help request by help_id
 *     tags: [Help Requests]
 *     description: Retrieve a help request with the corresponding id.
 *     parameters:
 *       - name: help_request_id
 *         in: path
 *         description: ID of help request to return
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *     responses:
 *       200:
 *         description: Responds with a help request with the corresponding id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HelpRequest'
 *       400:
 *         $ref: '#/components/responses/400'
 *       404:
 *         $ref: '#/components/responses/help-requests/404'
 */
