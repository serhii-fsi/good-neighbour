import * as helpRequestsRepo from "../../repositories/helpRequests/getAll";

export const getAll = async () => {
    const allHelpRequests = await helpRequestsRepo.getAll()
    return allHelpRequests
}