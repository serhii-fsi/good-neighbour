import { Request, Response, NextFunction } from "express";

import * as helpRequestsService from "../../../../services/helpRequests/getByUserId";
import { AppError } from "../../../../common/errors/AppError";
import { errors } from "../../../../common/errors/errors";
import * as usersService from "../../../../services/users";

export const getByUserId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user_id = Number(req.params.user_id);
        if (isNaN(user_id)) {
            throw new AppError(errors.VALIDATION_ERROR, "Invalid user id provided");
        }
        await usersService.getById(user_id);
        const userHelpRequests = await helpRequestsService.getByUserId(user_id);
        res.status(200).send({ userHelpRequests });
    } catch (error) {
        next(error);
    }
};

/**
 * @swagger
 * /api/users/:user_id/help-requests:
 *   get:
 *     summary: Gets help requests associated with a user_id
 *     tags: [Help Requests]
 *     description: Retrieves an array of help requests with the corresponding id.
 *     responses:
 *       200:
 *         description: Responds with an array of help requests with the corresponding id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HelpRequest'
 *       400:
 *         $ref: '#/components/responses/400'
 *       404:
 *         $ref: '#/components/responses/help-requests/404'
 */
