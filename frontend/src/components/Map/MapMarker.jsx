import React, { useState } from 'react';
import { MarkerF, InfoWindowF } from "@react-google-maps/api";
import { Link } from 'react-router-dom';
import { Tabs } from 'antd';

function MapMarker({ usersRequestsCards, getRoute, routes }) {

    const [clickedMarker, setClickedMarker] = useState(null);

    const handleClick = (user) => {
        setClickedMarker(user)
      }

    return (
        <div>
            {usersRequestsCards.map((userCard, index) => {
                const center = {
                    lat: userCard.requester.latitude,
                    lng: userCard.requester.longitude,
                };
                return (
                    <MarkerF 
                        key={index}
                        position={center}
                        onClick={() => handleClick(userCard)}
                    >
                        {clickedMarker && clickedMarker.requester.id === userCard.requester.id && (
                            <InfoWindowF onCloseClick={() => setClickedMarker(null)}>
                                <Tabs
                                    defaultActiveKey="1"
                                    items={userCard.requests.map((request, i) => {
                                        const id = String(i + 1);
                                        return {
                                            key: id,
                                            label: `${id}. ${request.help_type}`,
                                            children: (
                                                <>
                                                    <h3>{userCard.requester.first_name}</h3>
                                                    <Link to={getRoute(routes.requestPage, request.id)}>
                                                        <h4>{request.title}</h4>
                                                    </Link>
                                                </>
                                            ),
                                        };
                                    })}
                                />
                            </InfoWindowF>
                        )}
                    </MarkerF>
                );
            })}
        </div>
    );
}

export default React.memo(MapMarker);