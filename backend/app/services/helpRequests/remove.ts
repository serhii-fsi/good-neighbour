import * as helpRequestsRepo from "../../repositories/helpRequests/remove"


export const remove = async (help_request_id:any) => {
    return await helpRequestsRepo.remove(help_request_id)
}