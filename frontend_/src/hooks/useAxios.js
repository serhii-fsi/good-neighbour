import { useState, useCallback, useContext } from "react";
import axios from "axios";

import { AuthContext } from "../context/auth-context";

export const useAxios = () => {
    const { user } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (url, method = "GET", body = null, headers = {}) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios({
                url,
                method,
                headers: {
                    "Content-Type": "application/json",
                    "X-User-ID": user?.id,
                    ...headers,
                },
                data: body ? JSON.stringify(body) : null,
            });
            setIsLoading(false);
            return response.data;
        } catch (err) {
            setError(err);
            setIsLoading(false);
            throw err;
        }
    }, []);

    return { isLoading, error, sendRequest, setError };
};
