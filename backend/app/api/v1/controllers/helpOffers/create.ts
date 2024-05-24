import { Request, Response, NextFunction } from "express";

import * as helpOffersService from "../../../../services/helpOffers";

import { HelpOffer } from "../../../../db/seeds/data/types/data.types";
import { AppError } from "../../../../common/errors/AppError";
import { errors } from "../../../../common/errors/errors";

export const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const helper_id: number = Number(req.params.user_id);
        // Validation is required for the helper_id type
        if (isNaN(helper_id)) {
            throw new AppError(errors.VALIDATION_ERROR, "Invalid user id provided");
        }
        const helpOfferBody: HelpOffer = req.body;
        // Validation is required for the helper_id body
        if (!helpOfferBody.help_request_id || !helpOfferBody.status) {
            throw new AppError(errors.VALIDATION_ERROR, "Invalid input");
        }

        const newHelpOffer = await helpOffersService.create(helper_id, helpOfferBody);

        res.status(201).send({ newHelpOffer });
    } catch (error) {
        next(error);
    }
};

/**
 * @swagger
 * /api/users/:user_id/help-offers:
 *   post:
 *     summary: Create help offer
 *     tags: [Help Offers]
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HelpOffer'
 *     description: Creates a help offer
 *     responses:
 *       201:
 *         description: Responds with a newly created help offer
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HelpOffer'
 *       400:
 *         $ref: '#/components/responses/400'
 */
