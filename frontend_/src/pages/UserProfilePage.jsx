import { useContext } from "react";

import NavTop from "../components/NavTop/NavTop";
import UserProfile from "../components/UserProfile/UserProfile";

import { AuthContext } from "../context/auth-context";

export default function UserProfilePage() {
    const { user } = useContext(AuthContext);
    return (
        <>
            <NavTop title={"My Profile"} isRootComponent={false} />
            <UserProfile user={user} />
        </>
    );
}
