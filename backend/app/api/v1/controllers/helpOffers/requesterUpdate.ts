import { Request, Response, NextFunction } from "express";
import { AppError } from "../../../../common/errors/AppError";
import { errors } from "../../../../common/errors/errors";
import * as helpOffersServices from "../../../../services/helpOffers/requesterUpdate";
export const requesterUpdate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const help_request_id = Number(req.params.help_request_id);
        const helper_id = Number(req.params.helper_id);
        if (isNaN(help_request_id)) {
            throw new AppError(errors.VALIDATION_ERROR, "Invalid help_request_id provided");
        }
        if (isNaN(helper_id)) {
            throw new AppError(errors.VALIDATION_ERROR, "Invalid helper_id provided");
        }
        const AuthUserId = Number(req.header('X-User-ID'));
        const helpOfferBody = req.body;
        const updatedHelpOffer = await helpOffersServices.requesterUpdate(help_request_id, helper_id, AuthUserId, helpOfferBody);
        res.status(200).send({ updatedHelpOffer });
    } catch (error) {
        next(error);
    }
};