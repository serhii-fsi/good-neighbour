import { Request, Response, NextFunction } from "express";

export const remove = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { user_id } = req.params;
    } catch (error) {
        next(error);
    }
};
