import { errors } from "./errors";
import { AppError } from "./AppError";

type ErrorKeys = keyof typeof errors;

const getHttpError = (appError: AppError) => {
    const savedErrorObj = appError.getErrorObj();

    const isInErrorsCollection = Object.keys(errors).find((key) => {
        return (
            errors[key as ErrorKeys].statusCode === savedErrorObj.statusCode &&
            errors[key as ErrorKeys].message === savedErrorObj.message
        );
    });

    if (!isInErrorsCollection) {
        throw new Error(
            "Unexpected error! Can't find HTTP error in the 'errors' mapping collection"
        );
    }

    return savedErrorObj;
};

export default getHttpError;
