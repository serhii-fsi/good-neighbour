import { Request, Response, NextFunction } from "express";

import { AppError } from "../common/errors/AppError";
import getHttpError from "../common/errors/getHttpError";

const errorHandler = (appErr: AppError, req: Request, res: Response, next: NextFunction) => {
    if (appErr instanceof AppError) {
        const httpError = getHttpError(appErr);

        res.status(httpError.statusCode).send({ error: { message: httpError.message } });
    } else {
        console.log("CRITICAL ERROR : " + appErr);
        res.status(500).send({ error: { code: 500, msg: "Critical Error!" } });
        if (process.env.NODE_ENV !== "production") {
            throw appErr;
        }
    }
};
export default errorHandler;
