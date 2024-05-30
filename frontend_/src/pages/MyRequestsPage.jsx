import objectsArrayToLookupObj from "../utils/objectsArrayToLookupObj";

import NavTop from "../components/NavTop/NavTop";
import NavBottom from "../components/NavBottom/NavBottom";
import CardsList from "../components/CardsList/CardsList";
import RequestCard from "../components/RequestCard/RequestCard";
import Row from "../components/Row/Row";
import Status from "../components/Status/Status";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/auth-context";
import { useAxios } from "../hooks/useAxios";

export default function MyRequestsPage() {
    const { user } = useContext(AuthContext);
    const { isLoading, sendRequest, error } = useAxios();
    const [myRequestsCardObjects, setMyRequestsCardObjects] = useState([]);

    const testData = [
        {
            request: {
                id: 3,
                title: "Help Needed for Grocery Shopping",
                help_type: "Shopping",
                description:
                    "Hi! I'm Sarah, and I need assistance with grocery shopping once a week. Due to a recent injury, I am unable to carry heavy items. If you have a couple of hours to spare on a Monday or Thursday morning, your help would be greatly appreciated!",
                created_at: "2024-10-05T14:48:00.000Z",
                req_date: "2024-10-08T00:00:00.000Z",
                status: "active",
            },
            offers: [
                // I can receive all offers for my request
                {
                    status: "accepted",
                    helper: {
                        id: 9,
                        first_name: "David",
                        last_name: "Brown",
                    },
                },
                {
                    status: "active",
                    helper: {
                        id: 10,
                        first_name: "bla",
                        last_name: "bla",
                    },
                },
                {
                    status: "declined",
                    helper: {
                        id: 11,
                        first_name: "bla",
                        last_name: "bla",
                    },
                },
            ],
        },
        {
            request: {
                id: 4,
                title: "Garden Maintenance Volunteer",
                help_type: "Shopping",
                description:
                    "Hey there! I'm James, and I could use some help with maintaining my garden. I have a large garden that needs regular weeding, planting, and general upkeep. If you enjoy gardening and can offer a few hours over the weekend, I would really appreciate your assistance.",
                created_at: "2024-10-06T14:48:00.000Z",
                req_date: "2024-10-10T00:00:00.000Z",
                status: "active",
            },
            offers: [
                {
                    status: "active",
                    helper: {
                        id: 9,
                        first_name: "David",
                        last_name: "Brown",
                    },
                },
                {
                    status: "active",
                    helper: {
                        id: 10,
                        first_name: "bla",
                        last_name: "bla",
                    },
                },
                {
                    status: "declined",
                    helper: {
                        id: 11,
                        first_name: "bla",
                        last_name: "bla",
                    },
                },
            ],
        },
        {
            request: {
                id: 5,
                title: "Garden Maintenance Volunteer",
                help_type: "Shopping",
                description:
                    "Hey there! I'm James, and I could use some help with maintaining my garden. I have a large garden that needs regular weeding, planting, and general upkeep. If you enjoy gardening and can offer a few hours over the weekend, I would really appreciate your assistance.",
                created_at: "2024-10-07T14:48:00.000Z",
                req_date: "2024-10-12T00:00:00.000Z",
                status: "active",
            },
            offers: [],
        },
        {
            request: {
                id: 6,
                title: "Help Needed for Grocery Shopping",
                help_type: "Shopping",
                description:
                    "Hi! I'm Sarah, and I need assistance with grocery shopping once a week. Due to a recent injury, I am unable to carry heavy items. If you have a couple of hours to spare on a Monday or Thursday morning, your help would be greatly appreciated!",
                created_at: "2024-10-05T14:48:00.000Z",
                req_date: "2024-10-08T00:00:00.000Z",
                status: "closed",
            },
            offers: [
                {
                    status: "accepted",
                    helper: {
                        id: 9,
                        first_name: "David",
                        last_name: "Brown",
                    },
                },
                {
                    status: "active",
                    helper: {
                        id: 10,
                        first_name: "bla",
                        last_name: "bla",
                    },
                },
                {
                    status: "declined",
                    helper: {
                        id: 11,
                        first_name: "bla",
                        last_name: "bla",
                    },
                },
            ],
        },
        {
            request: {
                id: 7,
                title: "Help Needed for Grocery Shopping",
                help_type: "Shopping",
                description:
                    "Hi! I'm Sarah, and I need assistance with grocery shopping once a week. Due to a recent injury, I am unable to carry heavy items. If you have a couple of hours to spare on a Monday or Thursday morning, your help would be greatly appreciated!",
                created_at: "2024-10-05T14:48:00.000Z",
                req_date: "2024-10-08T00:00:00.000Z",
                status: "completed",
            },
            offers: [
                {
                    status: "accepted",
                    helper: {
                        id: 9,
                        first_name: "David",
                        last_name: "Brown",
                    },
                },
                {
                    status: "active",
                    helper: {
                        id: 10,
                        first_name: "bla",
                        last_name: "bla",
                    },
                },
                {
                    status: "declined",
                    helper: {
                        id: 11,
                        first_name: "bla",
                        last_name: "bla",
                    },
                },
            ],
        },
    ];

    const fetchHelpRequests = async () => {
        const { userHelpRequests } = await sendRequest(
            `${import.meta.env.VITE_API_URL}/api/users/${user.id}/help-requests`
        );
        setMyRequestsCardObjects(userHelpRequests);
        console.log(userHelpRequests);
        // setMyRequestsCardObjects(testData);
    };

    useEffect(() => {
        fetchHelpRequests();
    }, []);

    return (
        <>
            <NavTop title={"My Help Requests"} isRootComponent={true} />
            <div className="S-pl-m S-pr-m S-pb-l">
                <CardsList>
                    {myRequestsCardObjects.map((card) => (
                        <RequestCard
                            key={card.request.id}
                            requestId={card.request.id}
                            title={card.request.title}
                            reqDate={card.request.reqDate}
                            description={card.request.description}
                            helpType={card.request.help_type}
                        >
                            <Row justify="flex-end" gap="middle">
                                <Status
                                    isRequester={true}
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
