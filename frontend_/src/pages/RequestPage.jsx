import { useContext } from "react";
import { AuthContext } from "../context/auth-context";

import NavTop from "../components/NavTop/NavTop";
import Request from "../components/Request/Request";
import Status from "../components/Status/Status";
import OfferControl from "../components/OfferControl/OfferControl";
import ContactCard from "../components/ContactCard/ContactCard";

export default function RequestPage() {
    const { user } = useContext(AuthContext); // user.id === 1

    // Fetch data GET "/api/help-request/:help_request_id"
    // isRequester server returns data like this if authorId === authUserId
    const requestDataForRequester = {
        request: {
            id: 3,
            title: "Help Needed for Grocery Shopping",
            author_id: 9,
            help_type: "Shopping",
            description:
                "Hi! I'm Sarah, and I need assistance with grocery shopping once a week. Due to a recent injury, I am unable to carry heavy items. If you have a couple of hours to spare on a Monday or Thursday morning, your help would be greatly appreciated!",
            created_at: "2024-10-05T14:48:00.000Z",
            req_date: "2024-10-08T00:00:00.000Z",
            status: "active",
        },
        requester: {
            id: 5,
            first_name: "Sarah",
            last_name: "Johnson",
            postcode: "SW1A 1AA",
        },
        offers: [
            // I can receive all offers for my request
            {
                status: "accepted",
                helper: {
                    id: 9,
                    first_name: "David",
                    last_name: "Brown",
                    address: "London Road, 12",
                    postcode: "SW1A 1AA",
                    phone_number: "073455522",
                    additional_contacts: "Feel free to call me.",
                },
            },
            {
                status: "active",
                helper: {
                    id: 10,
                    first_name: "bla",
                    last_name: "bla",
                    address: "London Road, 12",
                    postcode: "SW1A 1AA",
                    phone_number: "073455522",
                    additional_contacts: "Feel free to call me.",
                },
            },
            {
                status: "declined",
                helper: {
                    id: 11,
                    first_name: "bla",
                    last_name: "bla",
                    address: "London Road, 12",
                    postcode: "SW1A 1AA",
                    phone_number: "073455522",
                    additional_contacts: "Feel free to call me.",
                },
            },
        ],
    };

    // Fetch data GET "/api/help-request/:help_request_id"
    // isHelper server returns data like this if authorId !== authUserId
    const requestDataForHelper = {
        request: {
            id: 3,
            title: "Help Needed for Grocery Shopping",
            author_id: 9,
            help_type: "Shopping",
            description:
                "Hi! I'm Sarah, and I need assistance with grocery shopping once a week. Due to a recent injury, I am unable to carry heavy items. If you have a couple of hours to spare on a Monday or Thursday morning, your help would be greatly appreciated!",
            created_at: "2024-10-05T14:48:00.000Z",
            req_date: "2024-10-08T00:00:00.000Z",
            status: "active",
        },
        requester: {
            id: 5,
            first_name: "Sarah",
            last_name: "Johnson",
            postcode: "SW1A 1AA",

            // Secret fields
            address: "London Road, 12",
            phone_number: "073455522",
            additional_contacts: "Feel free to call me.",
        },
        offers: [
            // I can receive only my offer with any status
            // and other offer only with "accepted" status
            {
                // Other helper's offer
                // status: "accepted",
                status: "active",
                helper: {
                    id: 9,
                    first_name: "David",
                    last_name: "Brown",
                },
            },
            {
                // My offer
                status: "active",
                // status: "declined",
                helper: {
                    id: 1, // My id
                    first_name: "My First Name",
                    last_name: "My Last Name",
                },
            },
        ],
    };

    const requestData = requestDataForHelper;

    const isHelper = user.id !== requestData.request.author_id;
    const isRequester = !isHelper;

    let content;

    if (isHelper) {
        content = (
            <>
                <Request
                    requestId={requestData.request.id}
                    title={requestData.request.title}
                    authorId={requestData.request.author_id}
                    name={requestData.requester.first_name + " " + requestData.requester.last_name}
                    postCode={requestData.requester.postcode}
                    reqDate={requestData.request.req_date}
                    description={requestData.request.description}
                    helpType={requestData.request.help_type}
                />
                <ContactCard
                    userId={requestData.requester.id}
                    fullName={
                        requestData.requester.first_name + " " + requestData.requester.last_name
                    }
                    address={requestData.requester.address}
                    postcode={requestData.requester.postcode}
                    phoneNumber={requestData.requester.phone_number}
                    additionalContacts={requestData.requester.additional_contacts}
                >
                    [Button]
                </ContactCard>
                <Status
                    isHelper={true}
                    authUserId={user.id}
                    requestStatus={requestData.request.status}
                    requestOffers={requestData.offers}
                />
                <OfferControl
                    authUserId={user.id}
                    requestStatus={requestData.request.status}
                    requestOffers={requestData.offers}
                />
            </>
        );
    }

    if (isRequester) {
        content = (
            <>
                <Request
                    requestId={requestData.request.id}
                    title={requestData.request.title}
                    authorId={requestData.request.author_id}
                    name={requestData.requester.first_name + " " + requestData.requester.last_name}
                    postCode={requestData.requester.postcode}
                    reqDate={requestData.request.req_date}
                    description={requestData.request.description}
                    helpType={requestData.request.help_type}
                />
                <Status
                    isRequester={true}
                    authUserId={user.id}
                    requestStatus={requestData.request.status}
                    requestOffers={requestData.offers}
                />
            </>
        );
    }

    return (
        <>
            <NavTop title={"Help Request"} isRootComponent={false} />
            {content}
        </>
    );
}
