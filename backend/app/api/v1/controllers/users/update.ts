import { Request, Response, NextFunction } from "express";

import * as usersService from "../../../../services/users";

export const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { user_id } = req.params;
        const updateBody = req.body;
        const updatedUser = await usersService.update(user_id, updateBody);
        res.status(200).send({ updatedUser });
    } catch (error) {
        next(error);
    }
};
