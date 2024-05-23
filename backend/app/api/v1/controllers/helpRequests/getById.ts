import { Request, Response, NextFunction } from "express";

import * as helpRequestsService from "../../../../services/helpRequests/getById";

export const getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { help_request_id } = req.params;
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
