import { useContext } from "react";
import { AuthContext } from "../context/auth-context";

import NavTop from "../components/NavTop/NavTop";

export default function RequestPage() {
    const { user } = useContext(AuthContext);

    // If user is owner of the current request - show different components

    return (
        <>
            <NavTop title={"Help Request"} isRootComponent={false} />
        </>
    );
}
