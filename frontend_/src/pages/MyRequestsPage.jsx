import objectsArrayToLookupObj from "../utils/objectsArrayToLookupObj";

import NavTop from "../components/NavTop/NavTop";
import CardsList from "../components/CardsList/CardsList";
import RequestCard from "../components/RequestCard/RequestCard";
import Status from "../components/Status/Status";

export default function MyRequestsPage() {
    // Read from the AuthContext
    const myId = 2;

    // Fetch data GET "/api/help-types"
    // Put in the HelpTypesContext???
    // const helpTypes = [
    //     { id: 1, name: "Shopping" },
    //     { id: 2, name: "Cleaning" },
    //     { id: 3, name: "Cooking" },
    // ];
    // const helpTypesLookup = objectsArrayToLookupObj(helpTypes, "id");

    // Fetch data GET "/api/users/:user_id/help-requests"
    const myRequestsCardObjects = [
        // Normalized
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

    return (
        <>
            <NavTop title={"My Help Requests"} isRootComponent={true} />

            <CardsList>
                {myRequestsCardObjects.map((card) => (
                    <RequestCard
                        key={card.request.id}
                        title={card.request.title}
                        reqDate={card.request.reqDate}
                        description={card.request.description}
                        helpType={card.request.help_type}
                    >
                        <Status
                            isRequester={true}
                            authUserId={myId}
                            requestStatus={card.request.status}
                            requestOffers={card.offers}
                        />
                    </RequestCard>
                ))}
            </CardsList>
        </>
    );
}
