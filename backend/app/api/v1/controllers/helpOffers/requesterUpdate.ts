import { Request, Response, NextFunction } from "express";
import { AppError } from "../../../../common/errors/AppError";
import { errors } from "../../../../common/errors/errors";
import * as helpOffersServices from "../../../../services/helpOffers/requesterUpdate";
export const requesterUpdate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const AuthUserId = Number(req.header("X-User-ID"));
        const help_request_id = Number(req.params.help_request_id);
        const helpOfferBody = req.body;

        if (isNaN(help_request_id)) {
            throw new AppError(errors.VALIDATION_ERROR, "Invalid help_request_id provided");
        }

        const updatedHelpOffer = await helpOffersServices.requesterUpdate(
            help_request_id,
            AuthUserId,
            helpOfferBody
        );

        res.status(200).send({ updatedHelpOffer });
    } catch (error) {
        next(error);
    }
};
