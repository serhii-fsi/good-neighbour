import { Request, Response, NextFunction } from "express";

import * as usersService from "../../../../services/users";

export const getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { user_id } = req.params;
        const user = await usersService.getById(user_id);
        res.status(200).send({ user });
    } catch (error) {
        next(error);
    }
};

/**
 * @swagger
 * /api/users/:user_id:
 *   get:
 *     summary: Get user by id
 *     tags: [Users]
 *     description: Retrieve a user with corresponding id.
 *     responses:
 *       200:
 *         description: Responds with a user with corresponding id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         $ref: '#/components/responses/404'
 */
