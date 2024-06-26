import { useState } from "react";

import SignUpFormView from "./SignUpFormView";

/**
 *
 * @param {function} props.createUser
 * @returns
 */

const SignUpForm = (props) => {
    const [userProfileData, setUserProfileData] = useState({
        username: null,
        email: null,
        avatar_url: null,
        age: null,
        first_name: null,
        last_name: null,
        about: null,
        address: null,
        postcode: null,
        phone_number: null,
        additional_contacts: null,
        help_radius: 1.5,
    });

    const handleFormChange = (changedValues, allValues) => {
        setUserProfileData(allValues);
    };

    const handleSubmit = () => {
        const { first_name, last_name, about, address, postcode, username } = userProfileData;
        const requiredFields = [first_name, last_name, about, address, postcode, username];

        if (requiredFields.every((field) => !!field)) {
            props.createUser(userProfileData);
        }
    };
    return (
        <>
            <SignUpFormView handleFormChange={handleFormChange} handleSubmit={handleSubmit} />
        </>
    );
};

export default SignUpForm;
