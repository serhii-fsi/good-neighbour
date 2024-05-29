import { useState, useEffect, useContext } from "react";

import { AuthContext } from "../context/auth-context";
import { useAxios } from "../hooks/useAxios";

import LoginForm from "../components/LoginForm/LoginForm";

const LoginPage = () => {
    const [allUsers, setAllUsers] = useState([]);
    const { isLoggedIn, user, login } = useContext(AuthContext);
    const { sendRequest, isLoading, contextHolder } = useAxios();

    const handleLogin = (userData) => {
        const currentUser = allUsers.find((user) => user.username === userData.username);
        if (currentUser) {
            login(currentUser);
        }
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
