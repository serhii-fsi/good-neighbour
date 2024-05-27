import NavTop from "../components/NavTop/NavTop";
import CardsList from "../components/CardsList/CardsList";
import RequestCard from "../components/RequestCard/RequestCard";
import OfferStatus from "../components/OfferStatus/OfferStatus";

export default function MyOffersPage() {
    // Read from the AuthContext
    const myId = 2;

    // Fetch data GET "/api/help-types"
    // Put in the HelpTypesContext???
    const helpTypes = [
        { id: 1, name: "Shopping" },
        { id: 2, name: "Cleaning" },
        { id: 3, name: "Cooking" },
    ];
    const helpTypesLookup = helpTypes.reduce((lookup, type) => {
        lookup[type.id] = type.name;
        return lookup;
    }, {});

    // Fetch data GET "/api/users/:user_id/help-offers" - correct url???
    const myOffersCardObjects = [
        // Normalized
        {
            request: {
                id: 3,
                title: "Help Needed for Grocery Shopping",
                help_type_id: 1,
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
                post_code: "SW1A 1AA",
            },
            my_offer: {
                status: "active",
            },
            other_helper: {
                id: 9,
                first_name: "David",
                last_name: "Brown",
            },
            other_helper_offer: {
                status: "accepted",
            },
        },

        // Not Normalized
        {
            request: {
                id: 4,
                title: "Garden Maintenance Volunteer",
                author_id: 6,
                help_type_id: 2,
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
                post_code: "L1 4JF",
            },
            my_offer: {
                helper_id: 2,
                help_request_id: 4,
                status: "accepted",
            },
            other_helper: {},
            other_helper_offer: {},
        },

        // Not Normalized
        {
            request: {
                id: 5,
                title: "Garden Maintenance Volunteer",
                author_id: 7,
                help_type_id: 2,
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
                post_code: "L1 4JF",
            },
            my_offer: {
                helper_id: 2,
                help_request_id: 5,
                status: "active",
            },
            other_helper: {},
            other_helper_offer: {},
        },
    ];

    myOffersCardObjects.forEach((card) => {
        card.request.help_type = helpTypesLookup[card.request.help_type_id];
    });

    return (
        <>
            <NavTop title={"My Help Offers"} isRootComponent={true} />

            <CardsList>
                {myOffersCardObjects.map((card) => (
                    <RequestCard
                        key={card.request.id}
                        title={card.request.title}
                        name={card.requester.first_name + " " + card.requester.last_name}
                        postCode={card.requester.post_code}
                        reqDate={card.request.reqDate}
                        description={card.request.description}
                        helpType={helpTypesLookup[card.request.help_type_id]}
                    >
                        <OfferStatus
                            requestStatus={card.request.status}
                            myOfferStatus={card.my_offer.status}
                            otherHelperId={card.other_helper.id}
                            otherHelperName={
                                card.other_helper.first_name + " " + card.other_helper.last_name
                            }
                            otherHelperOfferStatus={card.other_helper_offer.status}
                        />
                    </RequestCard>
                ))}
            </CardsList>
        </>
    );
}
