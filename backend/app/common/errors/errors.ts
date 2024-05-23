const errors = {
    VALIDATION_ERROR: {
        statusCode: 400,
        message: "BAD_REQUEST",

        // Other transports can be added here
    },
    REPOSITORY_ERROR: {
        statusCode: 500,
        message: "INTERNAL_SERVER_ERROR",

        // Other transports can be added here
    },
    // Add more error mappings as needed
};

export default errors;
