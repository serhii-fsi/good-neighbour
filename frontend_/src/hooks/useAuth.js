import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import config from "../config.json";
import getRoute from "../utils/getRoute";

export const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({ username: "Irwin Howe", id: 1 });
    const navigate = useNavigate();
    const { routes } = config;

    const login = useCallback((user) => {
        const userJSON = JSON.stringify(user);
        localStorage.setItem("user", userJSON);
        setUser(user);
        setIsLoggedIn(true);
        navigate(getRoute(routes.offerHelpPage));
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem("user");
        setIsLoggedIn(false);
        setUser({});
        navigate(getRoute(routes.loginPage));
    }, []);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            setUser(user);
            setIsLoggedIn(true);
        }
    }, []);

    return { isLoggedIn, login, logout, user };
};
