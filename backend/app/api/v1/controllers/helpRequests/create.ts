import { Request, Response, NextFunction } from "express";

import * as helpRequestsService from "../../../../services/helpRequests/create";

import { HelpRequest } from "../../../../db/seeds/data/types/data.types";

export const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const helpRequestBody: HelpRequest = req.body;
        const newHelpRequest = await helpRequestsService.create(helpRequestBody);
        res.status(201).send({ newHelpRequest });
    } catch (error) {
        next(error);
    }
};

/**
 * @swagger
 * /api/help-requests:
 *   post:
 *     summary: Creates a help request
 *     tags: [Help Requests]
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HelpRequest'
 *     description: Create a help request
 *     responses:
 *       201:
 *         description: Responds with a newly created help request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HelpRequest'
 *       400:
 *         $ref: '#/components/responses/400'
 */
