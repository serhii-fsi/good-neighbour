import * as helpRequestsRepo from "../../repositories/helpRequests/getById"

export const getById = async (id:string) => {
    const helpRequest = await helpRequestsRepo.getById(id)
    return helpRequest
}