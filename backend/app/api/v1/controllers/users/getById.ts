import { Request, Response, NextFunction } from "express";

export const getById = (req: Request, res: Response, next: NextFunction) => {
    try {
        // await usersService.getById()
    } catch (error) {
        next(error);
    }
};