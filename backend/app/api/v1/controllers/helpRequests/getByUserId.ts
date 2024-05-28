import { Request, Response, NextFunction } from "express";

import * as helpRequestsService from "../../../../services/helpRequests/getByUserId";

export const getByUserId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {user_id} = req.params
        const userHelpRequests = await helpRequestsService.getByUserId(user_id);
        res.status(200).send({userHelpRequests})
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
