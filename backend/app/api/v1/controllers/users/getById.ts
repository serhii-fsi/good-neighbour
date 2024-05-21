import { Request, Response, NextFunction } from "express";

import * as usersService from "../../../../services/users";

export const getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { user_id } = req.params;
        const user = await usersService.getById(user_id);
        res.status(200).send({ user });
    } catch (error) {
        next(error);
    }
};
