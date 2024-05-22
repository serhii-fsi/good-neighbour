import { Request, Response, NextFunction } from "express";

import * as helpRequestsService from "../../../../services/helpRequests/getAll";

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const helpRequests = await helpRequestsService.getAll();
        res.status(200).send({helpRequests})
    } catch (error) {
        next(error);
    }
};
