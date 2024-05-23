interface Error {
    statusCode: number;
    message: string;
}

class AppError extends Error {
    private errorKey: Error;

    constructor(errorKey: any, message: string) {
        super(message);
        this.message = message;
    }

    // setMessage(message: string) {
    //     this.message = message;
    // }

    getMessage() {
        return this.message;
    }
}

export default AppError;
