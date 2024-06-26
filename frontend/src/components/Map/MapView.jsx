import { GoogleMap, useLoadScript, MarkerF, InfoWindowF } from '@react-google-maps/api';
import { useState } from 'react';

import { Flex } from "antd";

const usersData = [
    {
        username: "Cuthbert85",
        email: "Cuthbert_Wilkinson47@gmail.com",
        avatar_url:
            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1055.jpg",
        age: 72,
        first_name: "Cuthbert",
        last_name: "Wilkinson",
        about: "I enjoy playing chess and reading books",
        address: "14 Craven Terrace, London",
        postcode: "W2 3QH",
        phone_number: "07624 985321",
        additional_contacts: "Please call me in the afternoons",
        help_radius: 1200,
        help_offered: 8,
        help_requests: 3,
        latitude: 51.5072,
        longitude: -0.1806,
    },
    {
        username: "MadeleineMcDermott",
        email: "Madeleine.McDermott@yahoo.com",
        avatar_url:
            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1179.jpg",
        age: 68,
        first_name: "Madeleine",
        last_name: "McDermott",
        about: "I love gardening and spending time with my grandchildren",
        address: "27 Belsize Road, London",
        postcode: "NW6 4QG",
        phone_number: "07853 241698",
        additional_contacts: "I'm available most mornings",
        help_radius: 800,
        help_offered: 5,
        help_requests: 1,
        latitude: 51.5458,
        longitude: -0.1879,
    },
    {
        username: "AlfredJohnson",
        email: "Alfred.Johnson@hotmail.com",
        avatar_url:
            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1032.jpg",
        age: 75,
        first_name: "Alfred",
        last_name: "Johnson",
        about: "I enjoy walking and meeting new people",
        address: "48 Pembridge Villas, London",
        postcode: "W11 3EP",
        phone_number: "07456 982314",
        additional_contacts: "I prefer to be contacted by email",
        help_radius: 1500,
        help_offered: 6,
        help_requests: 4,
        latitude: 51.5117,
        longitude: -0.2026,
    },
    {
        username: "EmilyThompson",
        email: "Emily.Thompson@gmail.com",
        avatar_url:
            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1174.jpg",
        age: 71,
        first_name: "Emily",
        last_name: "Thompson",
        about: "I love baking and spending time with my grandchildren",
        address: "9 Queensway, London",
        postcode: "W2 4QJ",
        phone_number: "07789 456123",
        additional_contacts: "I'm available most afternoons",
        help_radius: 1000,
        help_offered: 4,
        help_requests: 2,
        latitude: 51.5108,
        longitude: -0.1882,
    },
    {
        username: "JamesWilson",
        email: "James.Wilson@yahoo.com",
        avatar_url:
            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1096.jpg",
        age: 67,
        first_name: "James",
        last_name: "Wilson",
        about: "I enjoy playing golf and spending time with my family",
        address: "21 Portsea Place, London",
        postcode: "W2 2BL",
        phone_number: "07456 789012",
        additional_contacts: "Please call me in the mornings",
        help_radius: 1200,
        help_offered: 7,
        help_requests: 3,
        latitude: 51.5096,
        longitude: -0.1951,
    },
    {
        username: "SarahJones",
        email: "Sarah.Jones@hotmail.com",
        avatar_url:
            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1127.jpg",
        age: 70,
        first_name: "Sarah",
        last_name: "Jones",
        about: "I love reading and going for walks in the park",
        address: "14 Westbourne Terrace, London",
        postcode: "W2 3UL",
        phone_number: "07789 456789",
        additional_contacts: "I'm available most evenings",
        help_radius: 900,
        help_offered: 6,
        help_requests: 2,
        latitude: 51.5108,
        longitude: -0.1871,
    },
    {
        username: "RobertBrown",
        email: "Robert.Brown@gmail.com",
        avatar_url:
            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1050.jpg",
        age: 73,
        first_name: "Robert",
        last_name: "Brown",
        about: "I enjoy playing chess and spending time with my grandchildren",
        address: "10 Craven Road, London",
        postcode: "W2 3BR",
        phone_number: "07456 123456",
        additional_contacts: "Please call me in the afternoons",
        help_radius: 1100,
        help_offered: 5,
        help_requests: 2,
        latitude: 51.5078,
        longitude: -0.1813,
    },
    {
        username: "MichaelTaylor",
        email: "Michael.Taylor@yahoo.com",
        avatar_url:
            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1071.jpg",
        age: 69,
        first_name: "Michael",
        last_name: "Taylor",
        about: "I love gardening and spending time with my family",
        address: "25 Westbourne Grove, London",
        postcode: "W2 4UA",
        phone_number: "07789 456123",
        additional_contacts: "I'm available most mornings",
        help_radius: 1300,
        help_offered: 7,
        help_requests: 4,
        latitude: 51.5139,
        longitude: -0.1904,
    },
    {
        username: "DavidThomas",
        email: "David.Thomas@hotmail.com",
        avatar_url:
            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1024.jpg",
        age: 74,
        first_name: "David",
        last_name: "Thomas",
        about: "I enjoy reading and going for walks in the park",
        address: "18 Westbourne Grove Terrace, London",
        postcode: "W2 5PN",
        phone_number: "07456 789012",
        additional_contacts: "Please call me in the evenings",
        help_radius: 900,
        help_offered: 4,
        help_requests: 3,
        latitude: 51.5148,
        longitude: -0.1918,
    },
    {
        username: "maxbmaapc",
        email: "David.Thomas@hotmail.com",
        avatar_url:
            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1024.jpg",
        age: 23,
        first_name: "Maksim",
        last_name: "Lukianenko",
        about: "I enjoy reading and going for walks in the park",
        address: "18 Westbourne Grove Terrace, London",
        postcode: "W2 5PN",
        phone_number: "07456 789012",
        additional_contacts: "Please call me in the evenings",
        help_radius: 900,
        help_offered: 4,
        help_requests: 3,
        latitude: 51.5148,
        longitude: -0.1918,
    },
];


function MapView(props) {

    const libraries = ['places'];

    const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
      libraries,
    });
  
    const [markerUsername, setMarkerUsername] = useState(null);

    const mapContainerStyle = {
        width: '100vw',
        height: '100vh',
    };

    // defaultCenter is the user location, will be fetched from joined user-helpRequest table.
    const defaultCenter = {
        lat: 51.5167, // default latitude
        lng: -0.1769, // default longitude
    };

    if (loadError) {
      return <div>Error loading maps</div>;
    }
  
    if (!isLoaded) {
      return <div>Loading maps</div>;
    }
  
    const handleClick = (user) => {
      setMarkerUsername(user)
    }
  
    const ukBounds = {
      south: defaultCenter.lat - 0.1,
      west: defaultCenter.lng - 0.1,
      north: defaultCenter.lat + 0.1,
      east: defaultCenter.lng + 0.1
    };
  
    return (
        <div>
        <Flex>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={13}
                center={defaultCenter}
                options={{
                    restriction: {
                        latLngBounds: ukBounds,
                        strictBounds: true,
                    }
                }}
            >
            <MarkerF position={defaultCenter} 
                options={{
                    zIndex: 1,
                    icon: "./home-map-location-svgrepo-com.svg"
                }}
            />
            {usersData.map(user => {
                const center = {
                    lat: user.latitude, // default latitude
                    lng: user.longitude, // default longitude
                };
                const username = user.username;
                return <MarkerF 
                    key={user.username}
                    position={center}
                    onClick={() => handleClick(user)}
                    >
                    {markerUsername && markerUsername.username === user.username && (<InfoWindowF onCloseClick={() => setMarkerUsername(null)}>
                    <h1>Hi I am Info Window for {username}</h1>
                    </InfoWindowF>
                    )}
                </MarkerF>
            })}
            </GoogleMap>
        </Flex>
        </div>
    );
  };

export default MapView;