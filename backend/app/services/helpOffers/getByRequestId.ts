import * as helpOffersRepo from "../../repositories/helpOffers/getByRequestId";

export const getByRequestId = async (id: number) => {
    const helpOffersByRequestId = await helpOffersRepo.getByRequestId(id);
    return helpOffersByRequestId;
}