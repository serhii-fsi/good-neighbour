import UserProfileView from "./UserProfileView";

/**
 * @param {object} props.user
 * @param {function} props.logout
 * @returns
 */

const UserProfile = (props) => {
    // Fields will be changed by the dynamic data
    const fields = [
        {
            key: "1",
            label: "About",
            children:
                "Hi! I'm Liam, and I need assistance with grocery shopping once a week. Due to a recent injury, I am unable to carry heavy items. If you have a couple of hours to spare on a Monday or Thursday morning, your help would be greatly appreciated!",
        },
        {
            key: "2",
            label: "Address",
            children: "123 High Street, London, SW1A 1AA, England",
        },
        {
            key: "3",
            label: "Postcode",
            children: "SW1A 1AA",
        },
        {
            key: "4",
            label: "Phone Number",
            span: 2,
            children: "+44 20 7946 0958",
        },
        {
            key: "5",
            label: "Additional information",
            children:
                "Feel free to call me between 10 AM and 6 PM on weekdays, and anytime on weekends. If I'm unavailable, please leave a message, and I'll get back to you as soon as possible.",
        },
    ];
    const handleClick = () => {
        console.log("User profile edit btn clicked");
    };

    return (
        <UserProfileView
            fields={fields}
            user={props.user}
            handleClick={handleClick}
            logout={props.logout}
        />
    );
};

export default UserProfile;
