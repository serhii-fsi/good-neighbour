import { Request, Response, NextFunction } from "express";

import * as usersService from "../../../../services/users";

export const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { user_id } = req.params;
        const updateBody = req.body;
        const updatedUser = await usersService.update(user_id, updateBody);
        res.status(200).send({ updatedUser });
    } catch (error) {
        next(error);
    }
};

/**
 * @swagger
 * /api/users/:user_id:
 *   patch:
 *     summary: Update user
 *     tags: [Users]
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *     description: Update a user with corresponding id.
 *     responses:
 *       200:
 *         description: Responds with an updated user by corresponding id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         $ref: '#/components/responses/400'
 *       404:
 *         $ref: '#/components/responses/404'
 */
