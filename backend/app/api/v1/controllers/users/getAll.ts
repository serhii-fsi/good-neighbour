import { Request, Response, NextFunction } from "express";

import * as usersService from "../../../../services/users";

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await usersService.getAll();
        res.status(200).send({ users });
    } catch (error) {
        next(error);
    }
};
