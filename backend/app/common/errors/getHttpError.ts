import errors from "./errors.json";
import AppError from "./AppError";

export const getHttpError = (appError: AppError) => {
    const httpErrorObject = Object.keys(errors).find((key) => {
        const strKey = String(key);
        const savedErrorObj = appError.getErrorObj();
        return (
            errors[String("REPOSITORY_ERROR")].statusCode === savedErrorObj.statusCode &&
            errors[strKey].message === savedErrorObj.message
        );
    });

    if (!httpErrorObject) {
        throw new Error(
            "Unexpected error! Can't find HTTP error in the 'errors' mapping collection"
        );
    }

    return httpErrorObject;
};
