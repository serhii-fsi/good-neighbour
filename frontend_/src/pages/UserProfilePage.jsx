import { useContext, useState } from "react";
import { useParams } from "react-router-dom";

import NavTop from "../components/NavTop/NavTop";
import UserProfile from "../components/UserProfile/UserProfile";
import NavBottom from "../components/NavBottom/NavBottom";

import { AuthContext } from "../context/auth-context";

export default function UserProfilePage() {
    const { user, logout } = useContext(AuthContext);
    const { user_id } = useParams();

    const isMyProfile = Number(user_id) === user.id;

    return (
        <>
            <NavTop title={isMyProfile ? "My Profile" : "User Profile"} isRootComponent={false} />
            <div className="S-pl-m S-pr-m S-pt-l" style={{ paddingBottom: "150px" }}>
                <UserProfile
                    currentUser={user}
                    logout={logout}
                    isMyProfile={isMyProfile}
                    user_id={user_id}
                />
            </div>
            <NavBottom />
        </>
    );
}
