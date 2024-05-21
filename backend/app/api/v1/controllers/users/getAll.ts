import { Request, Response, NextFunction } from "express";

// // import usersService from ''

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // await usersService.getAll();
    } catch (error) {
        next(error);
    }
};
