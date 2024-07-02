import { useContext } from "react";
import MapView from "./MapView";
import { AuthContext } from "../../context/auth-context";
import { useLoadScript } from "@react-google-maps/api";

function Map(props) {

    const { helpRequestsCards } = props;

    const { user } = useContext(AuthContext);

    const libraries = ['places'];

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
        libraries,
    });

    const mapContainerStyle = {
        width: '100vw',
        height: '100vh',
    };

    const userLocation = {
        lat: user.latitude,
        lng: user.longitude,
    }

    const userLocationBounds = {
        south: userLocation.lat - 0.1,
        west: userLocation.lng - 0.1,
        north: userLocation.lat + 0.1,
        east: userLocation.lng + 0.1
      };

    const filteredHelpRequestsCards = helpRequestsCards.filter(
        (helpRequestCard) => user.username !== helpRequestCard.requester.username
    );

    const usersRequestsCards = filteredHelpRequestsCards.reduce((acc, curr) => {

        const { request, requester } = curr;
        const requesterId = requester.id;
        const existingRequester = acc.find(userRequestsObj => {
            return userRequestsObj.requester.id === requesterId;
        })

        if (existingRequester) {
            existingRequester.requests.push(request);
        } else {
            acc.push({ requester, requests: [request] });
        }

        return acc;        
    }, []);


    if (loadError) {
        return <div>Error loading maps</div>;
      }
    
      if (!isLoaded) {
        return <div>Loading maps</div>;
      }

    return <MapView {...props} user={user} mapContainerStyle={mapContainerStyle} usersRequestsCards={usersRequestsCards} userLocationBounds={userLocationBounds} userLocation={userLocation} />;
}

export default Map;