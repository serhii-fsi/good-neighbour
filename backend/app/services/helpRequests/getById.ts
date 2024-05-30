import { AppError } from "../../common/errors/AppError";
import { errors } from "../../common/errors/errors";
import * as helpRequestsRepo from "../../repositories/helpRequests/getById";

export const getById = async (id: number, authId: number) => {
    const { request, helpRequestOffersRows } = await helpRequestsRepo.getById(id);

    if (request.length === 0) {
        throw new AppError(errors.HELP_REQUEST_NOT_FOUND, `Help request was not found`);
    }

    const reqObj = {
        id: request[0].help_request_id,
        title: request[0].title,
        author_id: request[0].author_id,
        help_type: request[0].name,
        description: request[0].description,
        created_at: request[0].created_at,
        req_date: request[0].req_date,
        status: request[0].status,
    };

    const requesterObj = {
        id: request[0].author_id,
        first_name: request[0].first_name,
        last_name: request[0].last_name,
        postcode: request[0].postcode,
        additional_contacts: request[0].additional_contacts,
        phone_number: request[0].phone_number,
        address: request[0].address,
    };

    const offersArr: any = [];

    helpRequestOffersRows.forEach((offer: any) => {
        if (request[0].author_id === authId) {
            offersArr.push({
                status: offer.status,
                helper: {
                    id: offer.helper_id,
                    first_name: offer.first_name,
                    last_name: offer.last_name,
                    postcode: offer.postcode,
                    description: offer.description,
                    additional_contacts: offer.additional_contacts,

                    phone_number: offer.phone_number,
                    address: offer.address,
                },
            });
        } else {
            offersArr.push({
                status: offer.status,
                helper: {
                    id: offer.helper_id,
                    first_name: offer.first_name,
                    last_name: offer.last_name,
                },
            });
        }
    });

    const helpRequestById = {
        request: reqObj,
        requester: requesterObj,
        offers: offersArr,
    };

    return helpRequestById;
};
