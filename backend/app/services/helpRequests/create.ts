import * as helpRequestsRepo from "../../repositories/helpRequests/create";

import { HelpRequest } from "../../db/seeds/data/types/data.types";

export const create = async (user_id: number, helpRequestBody: HelpRequest) => {
    const newHelpRequest = await helpRequestsRepo.create(user_id, helpRequestBody);
    return newHelpRequest;
};
