import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/auth-context";
import { useAxios } from "../hooks/useAxios";

import LoginForm from "../components/LoginForm/LoginForm";
import config from "../config.json";
import getRoute from "../utils/getRoute";

const LoginPage = () => {
    const [allUsers, setAllUsers] = useState([]);
    const { isLoggedIn, user, login } = useContext(AuthContext);
    const { sendRequest, isLoading, contextHolder } = useAxios();
    const navigate = useNavigate();
    const { routes } = config;

    const handleLogin = (user) => {
        const currentUser = allUsers.find((user) => user.username === user.username);

        if (currentUser) {
            login(currentUser);
            if (isLoggedIn) {
                navigate(getRoute(routes.offerHelpPage));
            }
        }
        fetchUsers(user);
    };

    const fetchUsers = async () => {
        try {
            const { users } = await sendRequest(`${import.meta.env.VITE_API_URL}/api/users`);
            if (!isLoading) {
                setAllUsers(users);
            }
        } catch (error) {}
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <>
            {contextHolder}
            <div style={{ textAlign: "center" }}>
                <h1>Good Neighbour</h1>
                <LoginForm handleLogin={handleLogin} />
            </div>
        </>
    );
};

export default LoginPage;
