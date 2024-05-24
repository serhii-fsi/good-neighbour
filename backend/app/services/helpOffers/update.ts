import * as helpOffersRepo from "../../repositories/helpOffers/update"

export const update = async(user_id:string, updatedHelpOffer:any) => {
    const helpOffer = await helpOffersRepo.update(user_id, updatedHelpOffer)
    return helpOffer
}