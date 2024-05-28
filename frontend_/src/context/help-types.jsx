import React, { createContext, useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";

export const HelpTypesContext = createContext([]);

export const HelpTypesProvider = ({ children }) => {
    const { sendRequest } = useAxios();
    const [helpTypes, setHelpTypes] = useState([]);

    const fetchHelpTypes = async () => {
        try {
            const helpTypes = await sendRequest(`${import.meta.env.VITE_API_URL}/api/help-types`);
            setHelpTypes(helpTypes);
        } catch (error) {
            console.log(`Erros while fetching types: ${error.message}`);
        }
    };

    useEffect(() => {
        fetchHelpTypes();
    }, []);

    return <HelpTypesContext.Provider value={helpTypes}>{children}</HelpTypesContext.Provider>;
};
