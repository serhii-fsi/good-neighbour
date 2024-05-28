import NavTop from "../components/NavTop/NavTop";
import FilterForm from "../components/FilterForm/FilterForm";
import CardsList from "../components/CardsList/CardsList";
import RequestCard from "../components/RequestCard/RequestCard";

export default function OfferHelpPage() {
    // Fetch data GET "/api/help-types"
    // Put in the HelpTypesContext???
    const helpTypes = [
        { name: "Shopping" },
        { name: "Cleaning" },
        { name: "Cooking" },
        { name: "DIY" },
    ];

    // Fetch data GET "/api/help-requests" by default
    // Fetch data GET "/api/help-requests?from=2024-04-27&to=2024-05-27&helpTypes=helpTypes[]" ?? with queries
    const helpRequestsCards = [
        // Normalised
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
        },
    ];
    return (
        <>
            <NavTop title={"Offer Help"} logo={"Good Neighbour"} />
            <FilterForm helpTypes={helpTypes} />
            <CardsList>
                {helpRequestsCards.map((card) => (
                    <RequestCard
                        key={card.request.id}
                        title={card.request.title}
                        name={card.requester.first_name + " " + card.requester.last_name}
                        postCode={card.requester.postcode}
                        reqDate={card.request.reqDate}
                        description={card.request.description}
                        helpType={card.request.help_type}
                    ></RequestCard>
                ))}
            </CardsList>
        </>
    );
}
