import { useContext } from "react";

import NavTop from "../components/NavTop/NavTop";
import UserProfile from "../components/UserProfile/UserProfile";
import NavBottom from "../components/NavBottom/NavBottom";

import { AuthContext } from "../context/auth-context";

export default function UserProfilePage() {
    const { user, logout } = useContext(AuthContext);
    return (
        <>
            <NavTop title={"My Profile"} isRootComponent={false} />

            <NavBottom />

            <UserProfile user={user} logout={logout} />

        </>
    );
}
