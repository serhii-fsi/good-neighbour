import { AppError } from "../../common/errors/AppError";
import { errors } from "../../common/errors/errors";
import * as helpRequestsRepo from "../../repositories/helpRequests/getById";

export const getById = async (id: number) => {
    const helpRequest = await helpRequestsRepo.getById(id);
    if (!helpRequest) {
        throw new AppError(
            errors.HELP_REQUEST_NOT_FOUND,
            `No help request was found with id: ${id}`
        );
    }
    return { request: helpRequest };
};
