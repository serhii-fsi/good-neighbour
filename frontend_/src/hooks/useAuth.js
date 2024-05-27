import { useState, useEffect, useCallback } from "react";

export const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({ username: "Liam Brown" });

    const login = useCallback((user) => {
        const userJSON = JSON.stringify(user);
        localStorage.setItem("user", userJSON);
        setUser(user);
        setIsLoggedIn(true);
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem("user");
        setIsLoggedIn(false);
        setUser({});
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
