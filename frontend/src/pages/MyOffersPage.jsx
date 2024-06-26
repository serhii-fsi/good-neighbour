import objectsArrayToLookupObj from "../utils/objectsArrayToLookupObj";

import { useAxios } from "../hooks/useAxios";
import { useState, useEffect, useContext } from "react";

import { AuthContext } from "../context/auth-context";

import NavTop from "../components/NavTop/NavTop";
import NavBottom from "../components/NavBottom/NavBottom";
import CardsList from "../components/CardsList/CardsList";
import RequestCard from "../components/RequestCard/RequestCard";
import Status from "../components/Status/Status";
import Row from "../components/Row/Row";

export default function MyOffersPage() {
    const { user } = useContext(AuthContext);
    const { isLoading, sendRequest, error } = useAxios();
    const [helpOfferCards, setHelpOfferCards] = useState([]);

    const fetchHelpOffers = async () => {
        const testData = [
            {
                request: {
                    id: 2,
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
                        // status: "accepted",
                        // status: "declined",
                        helper: {
                            id: 1, // My id
                            first_name: "My First Name",
                            last_name: "My Last Name",
                        },
                    },
                ],
            },
            {
                request: {
                    id: 3,
                    title: "Help Needed for Grocery Shopping Help Needed for Grocery Shopping",
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
            },
        ];

        try {
            const { userHelpOffers } = await sendRequest(
                `${import.meta.env.VITE_API_URL}/api/users/${user.id}/help-offers`
            );
            setHelpOfferCards(userHelpOffers);
            // setHelpOfferCards(testData);
        } catch (error) {
            console.log("Error fetching help requests: " + error);
        }
    };

    useEffect(() => {
        fetchHelpOffers();
    }, []);

    return (
        <>
            <NavTop title={"My Help Offers"} isRootComponent={true} />
            <div className="S-pl-m S-pr-m S-pb-l">
                <CardsList>
                    {helpOfferCards.map((card) => (
                        <RequestCard
                            key={card.request.id}
                            requestId={card.request.id}
                            title={card.request.title}
                            name={card.requester.first_name + " " + card.requester.last_name}
                            postCode={card.requester.postcode}
                            reqDate={card.request.req_date}
                            description={card.request.description}
                            helpType={card.request.help_type}
                        >
                            <Row justify="flex-end" gap="middle">
                                <Status
                                    isHelper={true}
                                    authUserId={user.id}
                                    requestStatus={card.request.status}
                                    requestOffers={card.offers}
                                />
                            </Row>
                        </RequestCard>
                    ))}
                </CardsList>
            </div>
            <NavBottom />
        </>
    );
}
