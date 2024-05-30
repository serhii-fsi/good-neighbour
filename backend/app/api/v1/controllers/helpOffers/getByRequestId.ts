import { Request, Response, NextFunction } from "express";

import * as helpOffersService from "../../../../services/helpOffers/getByRequestId";
import * as helpRequestsService from "../../../../services/helpRequests/getById";
import { AppError } from "../../../../common/errors/AppError";
import { errors } from "../../../../common/errors/errors";

export const getByRequestId = async (req: Request, res: Response, next: NextFunction) => {
    const help_request_id = Number(req.params.help_request_id);
    try {
        if (isNaN(help_request_id)) {
            throw new AppError(errors.VALIDATION_ERROR, "Invalid help request id provided");
        }
        // await helpRequestsService.getById(help_request_id);
        const helpOffers = await helpOffersService.getByRequestId(help_request_id);
        res.status(200).send({ helpOffers });
    } catch (error) {
        next(error);
    }
};
