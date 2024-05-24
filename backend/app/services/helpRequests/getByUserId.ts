import * as helpRequestsRepo from "../../repositories/helpRequests/getByUserId";

export const getByUserId = async (user_id:string) => {
    const allHelpRequests = await helpRequestsRepo.getByUserId(user_id)
    console.log(allHelpRequests)
    return allHelpRequests
}