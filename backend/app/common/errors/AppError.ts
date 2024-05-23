import errors from "./errors.json";

interface ErrorObj {
    statusCode: number;
    message: string;
}

class AppError extends Error {
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

export default AppError;
