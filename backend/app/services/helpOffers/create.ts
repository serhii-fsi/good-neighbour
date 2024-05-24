import * as helpOffersRepo from "../../repositories/helpOffers";
import { HelpOffer } from "../../db/seeds/data/types/data.types";

import { AppError } from "../../common/errors/AppError";
import { errors } from "../../common/errors/errors";

export const create = async (helper_id: number, helpOfferBody: HelpOffer) => {
    const newHelpOffer = await helpOffersRepo.create(helper_id, helpOfferBody);
    if (!newHelpOffer) {
        throw new AppError(
            errors.REPOSITORY_ERROR,
            `Error occurred while creating help offer: ${helper_id}`
        );
    }

    return newHelpOffer;
};
