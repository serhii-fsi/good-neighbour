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
 * components:
 *   responses:
 *     help-offers:
 *       404:
 *         description: The helper id was not found
 *         contents: 'application/json'
 *   schemas:
 *     HelpOffer:
 *       type: object
 *       properties:
 *         helper_id:
 *           type: integer
 *         help_request_id:
 *           type: integer
 *         status:
 *           type: string
 */
