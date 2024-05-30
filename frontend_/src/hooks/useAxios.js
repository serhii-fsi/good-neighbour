import { useState, useCallback, useContext } from "react";
import axios from "axios";
import { message } from "antd";

import { AuthContext } from "../context/auth-context";

export const useAxios = () => {
    const { user } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [messagePopUp, contextHolder] = message.useMessage();
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
                data: body ? JSON.stringify(body) : undefined,
            });
            setIsLoading(false);
            if (method !== "GET") {
                messagePopUp.success("Success");
            }
            return response.data;
        } catch (err) {
            setError(err);
            if (method !== "GET") {
                messagePopUp.error("Error, try again");
            }
            setIsLoading(false);
            throw err;
        }
    }, []);

    return { isLoading, error, sendRequest, contextHolder };
};
