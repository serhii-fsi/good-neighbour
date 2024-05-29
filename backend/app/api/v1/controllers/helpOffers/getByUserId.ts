import { Request, Response, NextFunction } from "express";

import { AppError } from "../../../../common/errors/AppError";
import { errors } from "../../../../common/errors/errors";
import * as usersService from "../../../../services/users";
import * as helpOffersService from "../../../../services/helpOffers/getByUserId";

export const getByUserId = async (req: Request, res: Response, next: NextFunction) => {
    const user_id = Number(req.params.user_id);
    try {
        if (isNaN(user_id)) {
            throw new AppError(errors.VALIDATION_ERROR, "Invalid user id provided");
        }
        await usersService.getById(user_id);
        const userHelpOffers = await helpOffersService.getByUserId(user_id);
        res.status(200).send({ userHelpOffers });
    } catch (error) {
        next(error);
    }
};

/**
 * @swagger
 * /api/users/{user_id}/help-offers:
 *   get:
 *     tags:
 *       - Help Offers
 *     summary: Get help offers associated with a user_id
 *     description: Retrieves an array of help offer objects with the corresponding user_id, each with request, requester and offer properties
 *     operationId: getByUserId
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
 *         description: Responds with an array of help offers corresponding to the user_id.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *       400:
 *         $ref: '#/components/responses/400'
 *       404:
 *         $ref: '#/components/responses/404'
 */