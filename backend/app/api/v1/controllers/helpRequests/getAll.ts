import { Request, Response, NextFunction } from "express";

import * as helpRequestsService from "../../../../services/helpRequests/getAll";

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const helpRequests = await helpRequestsService.getAll();
        res.status(200).send({ helpRequests });
    } catch (error) {
        next(error);
    }
};

/**
 * @swagger
 * /api/help-requests:
 *   get:
 *     summary: Get all help-requests
 *     tags: [Help Requests]
 *     description: Retrieve a list of all help requests.
 *     responses:
 *       200:
 *         description: Responds with an array of all help requests.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * components:
 *   responses:
 *     help-requests:
 *       404:
 *         description: The help request was not found
 *         contents: 'application/json'
 *   schemas:
 *     HelpRequest:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         title:
 *           type: string
 *         author_id:
 *           type: integer
 *         help_type_id:
 *           type: integer
 *         first_name:
 *           type: string
 *         last_name:
 *           type: string
 *         description:
 *           type: string
 *         created_at:
 *           type: string
 *         req_date:
 *           type: string
 *         status:
 *           type: string
 *         postcode:
 *           type: string
 *         name:
 *           type: integer
 *         longitude:
 *           type: number
 *         latitude:
 *           type: number
 */
