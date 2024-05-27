import { Request, Response, NextFunction } from "express";

import * as helpOffersService from "../../../../services/helpOffers/getByRequestId";
import { AppError } from "../../../../common/errors/AppError";
import { errors } from "../../../../common/errors/errors";

export const getByRequestId = async (req: Request, res: Response, next: NextFunction) => {

    const { help_request_id } = req.params;
    const requestId = Number(help_request_id);    

    try {        
        if (isNaN(requestId)) {
            throw new AppError(errors.VALIDATION_ERROR, "Invalid help request id provided");        
        };
        const helpOffers = await helpOffersService.getByRequestId(Number(help_request_id));
        res.status(200).send({ helpOffers });        
    } catch (error) {
        next(error);
    }
}