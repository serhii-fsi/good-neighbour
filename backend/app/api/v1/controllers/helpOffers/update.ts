import { Request, Response, NextFunction } from "express";

import * as helpOffersServices from "../../../../services/helpOffers/update";
export const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { user_id } = req.params;
        const helpOfferBody = req.body;
        const updatedHelpOffer = await helpOffersServices.update(user_id, helpOfferBody);
        res.status(200).send({ updatedHelpOffer });
    } catch (error) {
        next(error);
    }
};


/**
 * @swagger
 * /api/users/:user_id/help-offers:
 *   patch:
 *     summary: Update help-offer
 *     tags: [Help Offers]
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HelpOffer'
 *     description: Update a help offer with a corresponding composit id.
 *     responses:
 *       200:
 *         description: Responds with an updated help offer with a corresponding composit id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HelpOffer'
 *       400:
 *         $ref: '#/components/responses/400'
 *       404:
 *         $ref: '#/components/responses/404'
 */
