import { AppError } from "../../common/errors/AppError";
import * as helpOffersRepo from "../../repositories/helpOffers/requesterUpdate";
import { errors } from "../../common/errors/errors";

export const requesterUpdate = async (
    help_request_id: number,
    AuthUserId: number,
    helpOfferBody: any
) => {
    const helpOffer = await helpOffersRepo.requesterUpdate(
        help_request_id,
        AuthUserId,
        helpOfferBody
    );

    if (helpOffer === undefined) {
        throw new AppError(errors.HELP_OFFER_NOT_FOUND, `No help offer found`);
    }
    return helpOffer;
};
