import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useAxios } from "../hooks/useAxios";
import { AuthContext } from "../context/auth-context";

import config from "../config.json";
import getRoute from "../utils/getRoute";

import NavTop from "../components/NavTop/NavTop";
import NavBottom from "../components/NavBottom/NavBottom";
import Request from "../components/Request/Request";
import Status from "../components/Status/Status";
import OfferStatus from "../components/Status/OfferStatus";
import OfferControl from "../components/OfferControl/OfferControl";
import ContactCard from "../components/ContactCard/ContactCard";
import RequestOffersList from "../components/RequestOffersList/RequestOffersList";
import RequestControl from "../components/RequestControl/RequestControl";
import RequestOfferControl from "../components/RequestOfferControl/RequestOfferControl";
import Row from "../components/Row/Row";

export default function RequestPage() {
    let [requestData, setRequestData] = useState(null);
    const [refreshCounter, setRefreshCounter] = useState(0);
    const { sendRequest, isLoading, error, contextHolder } = useAxios();
    const { user } = useContext(AuthContext); // user.id === 1
    const { help_request_id } = useParams();
    const navigate = useNavigate();
    const { routes } = config;

    // Fetch data GET "/api/help-request/:help_request_id"
    // isRequester server returns data like this if authorId === authUserId

    const fetchHelpRequest = async () => {
        try {
            const { helpRequest } = await sendRequest(
                `${import.meta.env.VITE_API_URL}/api/help-requests/${help_request_id}`
            );

            if (helpRequest) {
                setRequestData(helpRequest);
            }
        } catch (error) {}
    };

    const createHelpOffer = async () => {
        try {
            const { updateHelpOffer } = await sendRequest(
                `${import.meta.env.VITE_API_URL}/api/users/${user.id}/help-offers`,
                "POST",
                { help_request_id: help_request_id, status: "active" }
            );
            setRefreshCounter((prev) => prev + 1);
        } catch (error) {}
    };

    const deleteHelpOffer = async () => {
        try {
            await sendRequest(
                `${import.meta.env.VITE_API_URL}/api/help-requests/${help_request_id}/help-offers`,
                "DELETE"
            );
            setRefreshCounter((prev) => prev + 1);
        } catch (error) {}
    };

    const updateHelpRequest = async (statusToChange) => {
        try {
            const { updatedHelpRequest } = await sendRequest(
                `${import.meta.env.VITE_API_URL}/api/help-requests/${help_request_id}`,
                "PATCH",
                { status: statusToChange }
            );
            setRefreshCounter((prev) => prev + 1);
        } catch (error) {}
    };

    const updateHelpOfferStatus = async (helperId, state) => {
        try {
            const { updatedHelpOffer } = await sendRequest(
                `${import.meta.env.VITE_API_URL}/api/help-requests/${help_request_id}/help-offers`,
                "PATCH",
                { helper_id: helperId, status: state }
            );
            setRefreshCounter((prev) => prev + 1);
        } catch (error) {}
    };

    useEffect(() => {
        fetchHelpRequest();
    }, [refreshCounter]);

    if (!requestData) {
        return <div>No data available</div>;
    }

    const requestDataForRequester = {
        request: {
            id: 3,
            title: "Help Needed for Grocery Shopping",
            author_id: 1,
            help_type: "Shopping",
            description:
                "Hi! I'm Sarah, and I need assistance with grocery shopping once a week. Due to a recent injury, I am unable to carry heavy items. If you have a couple of hours to spare on a Monday or Thursday morning, your help would be greatly appreciated!",
            created_at: "2024-10-05T14:48:00.000Z",
            req_date: "2024-10-08T00:00:00.000Z",
            status: "active",
        },
        requester: {
            id: 1,
            first_name: "Sarah",
            last_name: "Johnson",
            postcode: "SW1A 1AA",
        },
        offers: [
            // I can receive all offers for my request
            {
                status: "accepted",
                // status: "active",
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
                    additional_contacts:
                        "Feel free to call me. Feel free to call me.Feel free to call me.Feel free to call me.Feel free to call me.Feel free to call me.Feel free to call me.Feel free to call me.Feel free to call me.Feel free to call me.",
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
                status: "accepted",
                // status: "active",
                helper: {
                    id: 9,
                    first_name: "David",
                    last_name: "Brown",
                },
            },
            {
                // My offer
                status: "active",
                // status: "accepted",
                // status: "declined",
                helper: {
                    id: 1, // My id
                    first_name: "My First Name",
                    last_name: "My Last Name",
                },
            },
        ],
    };

    // requestData = requestDataForHelper;
    // requestData = requestDataForRequester;

    const isHelper = user.id !== requestData.request.author_id;
    const isRequester = !isHelper;

    let content;

    if (isHelper) {
        const offerControlOnOfferHelp = () => {
            createHelpOffer();
        };
        const offerControlOnWithdrawHelp = () => {
            deleteHelpOffer();
        };

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
                {requestData.offers.some(
                    (offer) => offer.status === "accepted" && offer.helper.id === user.id
                ) ? (
                    <ContactCard
                        userId={requestData.requester.id}
                        fullName={
                            requestData.requester.first_name + " " + requestData.requester.last_name
                        }
                        address={requestData.requester.address}
                        postcode={requestData.requester.postcode}
                        phoneNumber={requestData.requester.phone_number}
                        additionalContacts={requestData.requester.additional_contacts}
                        className="S-mb-m"
                    />
                ) : null}
                <Row justify="flex-end" align="center" gap="middle" className="S-pb-m">
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
                        onOfferHelp={offerControlOnOfferHelp}
                        onWithdrawHelp={offerControlOnWithdrawHelp}
                    />
                </Row>
            </>
        );
    }

    if (isRequester) {
        const requestControlOnClose = () => {
            updateHelpRequest("closed");
        };
        const requestControlOnEdit = () => {
            navigate(getRoute(routes.requestEditPage, help_request_id));
        };
        const requestControlOnCompleted = () => {
            updateHelpRequest("completed");
        };

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
                <Row justify="flex-end" gap="middle" className="S-pb-s">
                    <Status
                        isRequester={true}
                        authUserId={user.id}
                        requestStatus={requestData.request.status}
                        requestOffers={requestData.offers}
                    />
                </Row>
                <Row justify="flex-end" gap="middle">
                    <RequestControl
                        authUserId={user.id}
                        requestStatus={requestData.request.status}
                        requestOffers={requestData.offers}
                        onClose={requestControlOnClose}
                        onEdit={requestControlOnEdit}
                        onCompleted={requestControlOnCompleted}
                    />
                </Row>
                {requestData.offers?.length ? (
                    <RequestOffersList>
                        {requestData.offers
                            .filter((offer) => offer.status !== "declined")
                            .map((offer) => {
                                return (
                                    <ContactCard
                                        key={offer.helper.id}
                                        userId={offer.helper.id}
                                        fullName={
                                            offer.helper.first_name + " " + offer.helper.last_name
                                        }
                                        address={offer.helper.address}
                                        postcode={offer.helper.postcode}
                                        phoneNumber={offer.helper.phone_number}
                                        additionalContacts={offer.helper.additional_contacts}
                                    >
                                        <Row justify="flex-end" align="center" gap="middle">
                                            <OfferStatus offerStatus={offer.status} />
                                            <RequestOfferControl
                                                offerStatus={offer.status}
                                                requestOffers={requestData.offers}
                                                onDecline={() => {
                                                    updateHelpOfferStatus(
                                                        offer.helper.id,
                                                        "declined"
                                                    );
                                                }}
                                                onAccept={() => {
                                                    updateHelpOfferStatus(
                                                        offer.helper.id,
                                                        "accepted"
                                                    );
                                                }}
                                                onCancel={() => {
                                                    updateHelpOfferStatus(
                                                        offer.helper.id,
                                                        "active"
                                                    );
                                                }}
                                            />
                                        </Row>
                                    </ContactCard>
                                );
                            })}
                    </RequestOffersList>
                ) : null}
            </>
        );
    }

    return (
        <>
            {contextHolder}
            <NavTop title={"Help Request"} isRootComponent={false} />
            <div className="S-pl-m S-pr-m S-pb-l">{content}</div>
            <NavBottom />
        </>
    );
}
