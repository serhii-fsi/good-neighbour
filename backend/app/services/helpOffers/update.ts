import { AppError } from "../../common/errors/AppError"
import * as helpOffersRepo from "../../repositories/helpOffers/update"
import { errors } from "../../common/errors/errors"

export const update = async(user_id:string, updatedHelpOffer:any) => {
    const helpOffer = await helpOffersRepo.update(user_id, updatedHelpOffer)
    if(helpOffer === undefined){
        throw new AppError(errors.HELP_OFFER_NOT_FOUND, `No help off found`) 
    }
    return helpOffer
}