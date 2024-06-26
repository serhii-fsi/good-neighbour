import { useState, useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";

import { HelpTypesContext } from "../context/help-types";
import { useAxios } from "../hooks/useAxios";

import NavTop from "../components/NavTop/NavTop";
import NavBottom from "../components/NavBottom/NavBottom";
import FilterForm from "../components/FilterForm/FilterForm";
import CardsList from "../components/CardsList/CardsList";
import RequestCard from "../components/RequestCard/RequestCard";
import Map from "../components/Map/Map";
import ToggleListMap from "../components/ToggleListMap/ToggleListMap";

export default function OfferHelpPage() {
    const { isLoading, sendRequest, error } = useAxios();
    const { helpTypes } = useContext(HelpTypesContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const [helpRequestsCards, setHelpRequestsCards] = useState([]);
    const [listMapView, setListMapView] = useState('list');

    // Fetch data GET "/api/help-requests" ?? with queries

    const fetchHelpRequests = async () => {
        try {
            const { helpRequests } = await sendRequest(
                `${import.meta.env.VITE_API_URL}/api/help-requests`
            );
            setHelpRequestsCards(helpRequests);
        } catch (error) {
            console.log("Error fetching help requests: " + error);
        }
    };

    useEffect(() => {
        fetchHelpRequests();
    }, []);

    return (
        <>
            <NavTop title={"Offer Help"} logo={"Good Neighbour"} />
            <div className="S-pl-m S-pr-m S-pt-l S-pb-l">
                <FilterForm helpTypes={helpTypes} setSearchParams={setSearchParams} />
                <br />
                <ToggleListMap listMapView={listMapView} setListMapView={setListMapView}/>
                {listMapView === 'list' ? <CardsList>
                    {helpRequestsCards?.length > 0
                        ? helpRequestsCards.map((card) => (
                              <RequestCard
                                  key={card.request.id}
                                  requestId={card.request.id}
                                  title={card.request.title}
                                  name={card.requester.first_name + " " + card.requester.last_name}
                                  postCode={card.requester.postcode}
                                  reqDate={card.request.reqDate}
                                  description={card.request.description}
                                  helpType={card.request.help_type}
                              ></RequestCard>
                          ))
                        : []}
                </CardsList>: <Map />}                
            </div>
            <NavBottom />
        </>
    );
}
