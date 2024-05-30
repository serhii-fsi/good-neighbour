import * as helpRequestsRepo from "../../repositories/helpRequests/getAll";

export const getAll = async () => {
    const allHelpRequests = await helpRequestsRepo.getAll();

    const transformedHelpRequests = allHelpRequests.map((helpRequest) => {
        return {
            request: {
                id: helpRequest.id,
                title: helpRequest.title,
                help_type: helpRequest.help_type,
                description: helpRequest.description,
                created_at: helpRequest.created_at,
                req_date: helpRequest.req_date,
                status: helpRequest.status,
            },
            requester: {
                id: helpRequest.author_id,
                first_name: helpRequest.first_name,
                last_name: helpRequest.last_name,
                postcode: helpRequest.postcode,
            },
        };
    });
    return transformedHelpRequests;
};
