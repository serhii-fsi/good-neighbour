import { AppError } from "../../common/errors/AppError";
import * as helpOffersRepo from "../../repositories/helpOffers/remove";
import { errors } from "../../common/errors/errors";

export const remove = async (help_request_id: number, AuthUserId: number) => {
    const { rowCount, rows } = await helpOffersRepo.remove(help_request_id, AuthUserId);
    if (rowCount === 0 || rows[0]) {
        throw new AppError(errors.HELP_OFFER_NOT_FOUND, `No help offer found`);
    }
    return rows;
};
