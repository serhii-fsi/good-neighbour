import * as helpRequestsRepo from "../../repositories/helpRequests/update"

export const update = async (help_request_id:string, updatedHelpRequest: any) => {
    
    const helpRequest = await helpRequestsRepo.update(help_request_id, updatedHelpRequest);
    
    return helpRequest
}