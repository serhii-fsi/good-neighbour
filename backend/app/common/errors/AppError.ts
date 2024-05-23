import { errors } from "./errors";

interface ErrorObj {
    statusCode: number;
    message: string;
}

export class AppError extends Error {
    private errorObj: ErrorObj;

    constructor(errorObj: ErrorObj, message: string) {
        super(message);
        this.message = message;
        this.errorObj = errorObj;
    }

    getMessage() {
        return this.message;
    }

    getErrorObj() {
        return this.errorObj;
    }
}
