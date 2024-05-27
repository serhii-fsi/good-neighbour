import NavTop from "../components/NavTop/NavTop";
import UserProfileForm from "../components/UserProfileForm/UserProfileForm";

const UserProfileEditPage = () => {
    return (
        <>
            <NavTop title={"Edit My Profile"} isRootComponent={false} />
            <UserProfileForm />
        </>
    );
};

export default UserProfileEditPage;
