import { Request, Response, NextFunction } from "express";

import * as helpRequestsService from "../../../../services/helpRequests/create";

import { HelpRequest } from "../../../../db/seeds/data/types/data.types";

export const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const helpRequestBody: HelpRequest = req.body;
        const newHelpRequest = await helpRequestsService.create(helpRequestBody);
        res.status(201).send({ newHelpRequest });
    } catch (error) {
        next(error);
    }
};
