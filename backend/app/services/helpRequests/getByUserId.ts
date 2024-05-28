import * as helpRequestsRepo from "../../repositories/helpRequests/getByUserId";

export const getByUserId = async (user_id:string) => {
    const {requestsRows, offers} = await helpRequestsRepo.getByUserId(user_id)
    const userHelpRequests: any = []

    requestsRows.forEach((req: any) => {
        const reqObj = {
            id: req.help_request_id,
            title: req.title,
            help_type: req.name,
            description: req.description,
            created_at: req.created_at,
            req_date: req.req_date,
            status: req.status,
        };

        const offersArr: any = [];


        offers.forEach((offer: any) => {

            if (req.help_request_id === offer.help_request_id) {
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
        
        userHelpRequests.push({
            request: reqObj,
            offers: offersArr,
        })
        
    })
    return  userHelpRequests
}