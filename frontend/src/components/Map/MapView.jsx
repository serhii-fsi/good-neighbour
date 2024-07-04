import { GoogleMap, MarkerF } from '@react-google-maps/api';
import React, { useMemo } from 'react';
import { Flex } from "antd";
import getRoute from '../../utils/getRoute';
import config from "../../config.json";
import MapMarker from './MapMarker';

function MapView({ mapContainerStyle, usersRequestsCards, userLocationBounds, userLocation }) {

    const { routes } = config;

    const memoisedMarkers = useMemo(() => (
      <MapMarker
        usersRequestsCards={usersRequestsCards} getRoute={getRoute}
        routes={routes}
      />
    ), [usersRequestsCards]);

    return (
      <div>
        <Flex>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={13}
                center={userLocation}
                options={{
                    restriction: {
                        latLngBounds: userLocationBounds,
                        strictBounds: true,
                    },
                    streetViewControl: false,
                }}
            >
            <MarkerF position={userLocation} 
                options={{
                    icon: "./home-map-location-svgrepo-com.svg"
                }}
            />
            {memoisedMarkers}
            </GoogleMap>
        </Flex>
      </div>
    );
  };

export default React.memo(MapView);