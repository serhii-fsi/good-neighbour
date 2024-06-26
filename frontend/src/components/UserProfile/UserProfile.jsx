import { useState, useEffect } from "react";

import UserProfileView from "./UserProfileView";
import { useAxios } from "../../hooks/useAxios";

/**
 * @param {object} props.currentUser
 * @param {object} props.user_id
 * @param {function} props.logout
 * @param {boolean} props.isMyProfile
 * @returns
 */

const UserProfile = (props) => {
    const { isLoading, sendRequest, error } = useAxios();
    const [currentUserProfile, setCurrentUserProfile] = useState(null);

    async function fetchUserProfile() {
        try {
            const { user } = await sendRequest(
                `${import.meta.env.VITE_API_URL}/api/users/${props.user_id}`
            );

            setCurrentUserProfile(user);
        } catch (error) {
            console.log(`Unable to fetch profile data: ${error}`);
        }
    }

    useEffect(() => {
        fetchUserProfile();
    }, []);

    const myProfileFields = [
        {
            key: "1",
            label: "About",
            children: props.currentUser.about,
        },
        {
            key: "2",
            label: "Address",
            children: props.currentUser.address,
        },
        {
            key: "3",
            label: "Postcode",
            children: props.currentUser.postcode,
        },
        {
            key: "4",
            label: "Phone Number",
            span: 2,
            children: props.currentUser.phone_number,
        },
        {
            key: "5",
            label: "Additional information",
            children: props.currentUser.additional_contacts,
        },
    ];

    const profileFields = [
        {
            key: "1",
            label: "About",
            children: props.currentUser.about,
        },
        {
            key: "3",
            label: "Postcode",
            children: props.currentUser.postcode,
        },
    ];

    const handleClick = () => {
        console.log("User profile edit btn clicked");
    };

    if (props.isMyProfile) {
        return (
            <UserProfileView
                isMyProfile={props.isMyProfile}
                fields={myProfileFields}
                user={props.currentUser}
                handleClick={handleClick}
                logout={props.logout}
            />
        );
    }

    if (currentUserProfile) {
        return (
            <UserProfileView
                isMyProfile={props.isMyProfile}
                fields={profileFields}
                user={currentUserProfile}
                handleClick={handleClick}
                logout={props.logout}
            />
        );
    }

    return null;
};

export default UserProfile;
