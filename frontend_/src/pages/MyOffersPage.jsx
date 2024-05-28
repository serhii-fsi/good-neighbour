import objectsArrayToLookupObj from "../utils/objectsArrayToLookupObj";

import NavTop from "../components/NavTop/NavTop";
import CardsList from "../components/CardsList/CardsList";
import RequestCard from "../components/RequestCard/RequestCard";
import OfferStatus from "../components/OfferStatus/OfferStatus";

export default function MyOffersPage() {
    // Read from the AuthContext
    const myId = 2;

    // Fetch data GET "/api/users/:user_id/help-offers" - correct url???
    const requestsCardObjects = [
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
            requester: {
                id: 5,
                first_name: "Sarah",
                last_name: "Johnson",
                postcode: "SW1A 1AA",
            },
            offers: [
                // I can receive only my offer with any status
                // and other offer only with "accepted" status
                {
                    // Other helper's offer
                    status: "accepted",
                    helper: {
                        id: 9,
                        first_name: "David",
                        last_name: "Brown",
                    },
                },
                {
                    // My offer
                    status: "active",
                    helper: {
                        id: 2, // My id
                        first_name: "My First Name",
                        last_name: "My Last Name",
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
            requester: {
                id: 6,
                first_name: "James",
                last_name: "Dou",
                postcode: "L1 4JF",
            },
            offers: [
                {
                    // My offer
                    status: "active",
                    helper: {
                        id: 2, // My id
                        first_name: "My First Name",
                        last_name: "My Last Name",
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
            requester: {
                id: 7,
                first_name: "James",
                last_name: "Dou",
                postcode: "L1 4JF",
            },
            offers: [
                {
                    // My offer
                    status: "accepted",
                    helper: {
                        id: 2, // My id
                        first_name: "My First Name",
                        last_name: "My Last Name",
                    },
                },
            ],
        },
    ];

    return (
        <>
            <NavTop title={"My Help Offers"} isRootComponent={true} />

            <CardsList>
                {requestsCardObjects.map((card) => (
                    <RequestCard
                        key={card.request.id}
                        title={card.request.title}
                        name={card.requester.first_name + " " + card.requester.last_name}
                        postCode={card.requester.postcode}
                        reqDate={card.request.reqDate}
                        description={card.request.description}
                        helpType={card.request.help_type}
                    >
                        <OfferStatus
                            currentUserId={myId}
                            requestStatus={card.request.status}
                            requestOffers={card.offers}
                        />
                    </RequestCard>
                ))}
            </CardsList>
        </>
    );
}
