import { Request, Response, NextFunction } from "express";

// // import typesService from ''

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // await typesService.getAll();
    } catch (error) {
        next(error);
    }
};
