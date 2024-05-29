import objectsArrayToLookupObj from "../utils/objectsArrayToLookupObj";

import { useAxios } from "../hooks/useAxios";
import { useState, useEffect, useContext } from "react";

import { AuthContext } from "../context/auth-context";

import NavTop from "../components/NavTop/NavTop";
import CardsList from "../components/CardsList/CardsList";
import RequestCard from "../components/RequestCard/RequestCard";
import Status from "../components/Status/Status";

export default function MyOffersPage() {
    const { user } = useContext(AuthContext);
    const { isLoading, sendRequest, error } = useAxios();
    const [helpOfferCards, setHelpOfferCards] = useState([]);

    const fetchHelpOffers = async () => {
        try {
            const { userHelpOffers } = await sendRequest(
                `${import.meta.env.VITE_API_URL}/api/users/${user.id}/help-offers`
            );
            setHelpOfferCards(userHelpOffers);
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

            <CardsList>
                {helpOfferCards.map((card) => (
                    <RequestCard
                        key={card.request.id}
                        requestId={card.request.id}
                        title={card.request.title}
                        name={card.requester.first_name + " " + card.requester.last_name}
                        postCode={card.requester.postcode}
                        reqDate={card.request.reqDate}
                        description={card.request.description}
                        helpType={card.request.help_type}
                    >
                        <Status
                            isHelper={true}
                            authUserId={user.id}
                            requestStatus={card.request.status}
                            requestOffers={card.offers}
                        />
                    </RequestCard>
                ))}
            </CardsList>
        </>
    );
}
