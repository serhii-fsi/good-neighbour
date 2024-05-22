import { Request, Response, NextFunction } from "express";

import * as usersService from "../../../../services/users";

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await usersService.getAll();
        res.status(200).send({ users });
    } catch (error) {
        next(error);
    }
};

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     description: Retrieve a list of all users.
 *     responses:
 *       200:
 *         description: Responds with an array of all users.
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
 *     400:
 *       description: Bad request
 *       contents: 'application/json'
 *     404:
 *       description: The user was not found
 *       contents: 'application/json'
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *         email:
 *           type: string
 *         avatar_url:
 *           type: string
 *         age:
 *           type: integer
 *         first_name:
 *           type: string
 *         last_name:
 *           type: string
 *         about:
 *           type: string
 *         address:
 *           type: string
 *         post_code:
 *           type: string
 *         phone_number:
 *           type: string
 *         additional_contacts:
 *           type: string
 *         help_radius:
 *           type: integer
 *         longitude:
 *           type: number
 *         latitude:
 *           type: number
 *         help_offers_count:
 *           type: integer
 *         help_requests_count:
 *           type: integer
 */
