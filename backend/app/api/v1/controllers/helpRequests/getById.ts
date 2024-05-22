import { Request, Response, NextFunction } from "express";

import * as helpRequestsService from "../../../../services/helpRequests/getById";

export const getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { help_request_id } = req.params;
        const helpRequest = await helpRequestsService.getById(help_request_id);
        res.status(200).send({ helpRequest });
    } catch (error) {
        next(error);
    }
};
