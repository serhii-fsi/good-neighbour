import { Request, Response, NextFunction } from "express";

import * as usersService from "../../../../services/users";
import { User } from "../../../../db/seeds/data/types/data.types";

export const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userBody: User = req.body;
        const newUser = await usersService.create(userBody);
        res.status(201).send({ newUser });
    } catch (error) {
        next(error);
    }
};
