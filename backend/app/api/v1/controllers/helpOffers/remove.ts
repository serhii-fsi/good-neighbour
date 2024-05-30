import { Request, Response, NextFunction } from "express";
import * as helpOffersServices from "../../../../services/helpOffers/remove";

export const remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const help_request_id = Number(req.params.help_request_id);
        const AuthUserId = Number(req.header('X-User-ID'));
        await helpOffersServices.remove(help_request_id, AuthUserId);
        res.status(204).send();
    } catch (error) {

        next(error);
    }
};
