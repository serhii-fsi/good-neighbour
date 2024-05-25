import { useState, useCallback } from "react";
import axios from "axios";

export const useAxios = () => {
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
