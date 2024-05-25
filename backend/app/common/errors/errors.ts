export const errors = {
    VALIDATION_ERROR: {
        statusCode: 400,
        message: "Invalid input provided",
    },
    REPOSITORY_ERROR: {
        statusCode: 500,
        message: "Internal server error",
    },
    USER_NOT_FOUND: {
        statusCode: 404,
        message: "User was not found",
    },
    HELP_REQUEST_NOT_FOUND: {
        statusCode: 404,
        message: "Help request was not found",
    },
    HELP_OFFER_NOT_FOUND: {
        statusCode: 404,
        message: "Help offer was not found",
    },
};
