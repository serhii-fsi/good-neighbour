import { Request, Response, NextFunction } from "express";

import * as usersService from "../../../../services/users";
import { AppError } from "../../../../common/errors/AppError";
import { errors } from "../../../../common/errors/errors";

export const getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user_id = Number(req.params.user_id);
        if (isNaN(user_id)) {
            throw new AppError(errors.VALIDATION_ERROR, "Invalid user id provided");
        }
        const user = await usersService.getById(user_id);
        res.status(200).send({ user });
    } catch (error) {
        next(error);
    }
};

/**
 * @swagger
 * /api/users/{user_id}:
 *   get:
 *     summary: Get user by id
 *     tags: [Users]
 *     description: Retrieve a user with corresponding id.
 *     parameters:
 *       - name: user_id
 *         in: path
 *         description: ID of user to return
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *     responses:
 *       200:
 *         description: Responds with a user with corresponding id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         $ref: '#/components/responses/400'
 *       404:
 *         $ref: '#/components/responses/404'
 */
