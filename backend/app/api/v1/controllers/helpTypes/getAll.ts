import { Request, Response, NextFunction } from "express";

import * as helpTypesService from "../../../../services/helpTypes";

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const helpTypes = await helpTypesService.getAll();
        res.status(200).send({ helpTypes });
    } catch (error) {
        next(error);
    }
};

/**
 * @swagger
 * /api/help-types:
 *   get:
 *     summary: Get all help types
 *     tags: [Help Types]
 *     description: Retrieve a list of all help types.
 *     responses:
 *       200:
 *         description: Responds with an array of all help types.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/HelpType'
 */

/**
 * @swagger
 * components:
 *   responses:
 *     help-types:
 *       404:
 *         description: The help type was not found
 *         contents: 'application/json'
 *   schemas:
 *     HelpType:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         description:
 *           type: string
 */
