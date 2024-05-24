import * as helpOffersRepo from "../../repositories/helpOffers/getByRequestId";
import { AppError } from "../../common/errors/AppError";
import { errors } from "../../common/errors/errors";

export const getByRequestId = async (help_request_id: number) => {
    const helpOffersByRequestId = await helpOffersRepo.getByRequestId(help_request_id);
    if (helpOffersByRequestId.length === 0) {
        throw new AppError(
            errors.HELP_REQUEST_NOT_FOUND,
            `No help request was found with id: ${help_request_id}`
        );
    }
    return helpOffersByRequestId;
}