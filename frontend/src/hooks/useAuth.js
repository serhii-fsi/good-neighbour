import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import config from "../config.json";
import getRoute from "../utils/getRoute";

// {
//     id: 1,
//     username: "Irwin40",
//     email: "Irwin_Howe23@hotmail.com",
//     avatar_url:
//         "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1215.jpg",
//     age: 64,
//     first_name: "Irwin",
//     last_name: "Howe",
//     about: "Labore virtus admiratio expedita benevolentia curriculum usitas voveo odio vilitas. Viriliter beatae nobis porro cruentus sufficio cohaero pectus patruus clibanus. Ter crapula thalassinus sumptus tandem torrens amplus sortitus ars pecco.",
//     address: "Henniker Rd, London",
//     postcode: "E15 1JP",
//     phone_number: "01281 97323",
//     additional_contacts:
//         "Censura basium carcer. Delicate alius aperiam color virga cruentus traho. Correptius vesper supplanto voluptatum.",
//     help_radius: 551,
// }
export const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
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
            navigate(getRoute(routes.offerHelpPage));
        }
    }, []);

    return { isLoggedIn, login, logout, user };
};
