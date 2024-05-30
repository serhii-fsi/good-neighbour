import * as helpRequestsRepo from "../../repositories/helpRequests/update";

export const update = async (help_request_id: string, helpRequestBody: any) => {
    const helpRequest = await helpRequestsRepo.update(help_request_id, helpRequestBody);

    return helpRequest;
};
