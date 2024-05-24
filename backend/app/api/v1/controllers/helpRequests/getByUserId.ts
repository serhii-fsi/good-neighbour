import { Request, Response, NextFunction } from "express";

import * as helpRequestsService from "../../../../services/helpRequests/getByUserId";

export const getByUserId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {user_id} = req.params
        const helpRequests = await helpRequestsService.getByUserId(user_id);
        res.status(200).send({helpRequests})
    } catch (error) {
        next(error);
    }
};
