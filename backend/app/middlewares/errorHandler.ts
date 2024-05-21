import { Request, Response, NextFunction } from "express";

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
};

export default errorHandler;
