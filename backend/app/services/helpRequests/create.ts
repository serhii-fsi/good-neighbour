import * as helpRequestsRepo from "../../repositories/helpRequests/create";

import { HelpRequest } from "../../db/seeds/data/types/data.types";

export const create = async (helpRequestBody: HelpRequest) => {
    const newHelpRequest = await helpRequestsRepo.create(helpRequestBody);
    return newHelpRequest;
};
