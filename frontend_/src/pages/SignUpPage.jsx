import { useNavigate } from "react-router-dom";

import { useAxios } from "../hooks/useAxios";

import SignUpForm from "../components/SignUpForm/SignUpForm";
import config from "../config.json";
import getRoute from "../utils/getRoute";

function SignUpPage() {
    const { sendRequest, isLoading, contextHolder } = useAxios();
    const navigate = useNavigate();
    const { routes } = config;

    const createUser = async (userData) => {
        try {
            const { newUser } = await sendRequest(
                `${import.meta.env.VITE_API_URL}/api/users`,
                "POST",
                userData
            );
            if (newUser) {
                navigate(getRoute(routes.loginPage));
            }
        } catch (error) {}
    };

    return (
        <>
            {contextHolder}
            <div style={{ textAlign: "center" }}>
                <h1>Good Neighbour</h1>
                <SignUpForm createUser={createUser} />
            </div>
        </>
    );
}

export default SignUpPage;
