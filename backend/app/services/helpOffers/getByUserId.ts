import * as helpOffersRepo from "../../repositories/helpOffers/getByUserId";

export const getByUserId = async (id: number) => {
    
    const { requests, offers } = await helpOffersRepo.getByUserId(id);

    const userHelpOffers: any = [];

    requests.forEach((req: any) => {
        const reqObj = {
            id: req.help_request_id,
            title: req.title,
            help_type: req.name,
            description: req.description,
            created_at: req.created_at,
            req_date: req.req_date,
            status: req.status,
        };

        const requesterObj = {
            id: req.id,
            first_name: req.first_name,
            last_name: req.last_name,
            postcode: req.postcode
        };

        const offersArr: any = [];


        offers.forEach((offer: any) => {

            if (req.help_request_id === offer.help_request_id && offer.id === id) {
                offersArr.push({
                    status: offer.status,
                    helper: {
                        id: offer.id,
                        first_name: offer.first_name,
                        last_name: offer.last_name,
                    }
                }) 
            }
            if (req.help_request_id === offer.help_request_id && offer.id !== id && offer.status === 'accepted') {
                offersArr.push({
                    status: offer.status,
                    helper: {
                        id: offer.id,
                        first_name: offer.first_name,
                        last_name: offer.last_name,
                    }
                }) 
            }
        })
        
        userHelpOffers.push({
            request: reqObj,
            requester: requesterObj,
            offers: offersArr,
        })
        
    })

    return userHelpOffers;
}