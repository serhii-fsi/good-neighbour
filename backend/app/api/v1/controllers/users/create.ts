import { Request, Response, NextFunction } from "express";

import * as usersService from "../../../../services/users";
import { User } from "../../../../db/seeds/data/types/data.types";

export const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userBody: User = req.body;
        const newUser = await usersService.create(userBody);
        res.status(201).send({ newUser });
    } catch (error) {
        next(error);
    }
};

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create user
 *     tags: [Users]
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *     description: Creates a user
 *     responses:
 *       201:
 *         description: Responds with a newly created user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         $ref: '#/components/responses/400'
 */
