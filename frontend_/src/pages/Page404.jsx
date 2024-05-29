import { Link } from "react-router-dom";

import getRoute from "../utils/getRoute";

import config from "../config.json";
const { routes } = config;

export default function Page404() {
    return (
        <ul>
            <li style={{ padding: "10px" }}>
                <Link to={"/Page404"}>Page404</Link>
            </li>

            <li style={{ padding: "10px" }}>
                <Link to={getRoute(routes.offerHelpPage)}>offerHelpPage</Link>
            </li>
            <li style={{ padding: "10px" }}>
                <Link to={getRoute(routes.requestCreatePage)}>requestCreatePage</Link>
            </li>
            <li style={{ padding: "10px" }}>
                <Link to={getRoute(routes.requestEditPage, 1)}>requestEditPage</Link>
            </li>
            <li style={{ padding: "10px" }}>
                <Link to={getRoute(routes.requestPage, 1)}>requestPage</Link>
            </li>
            <li style={{ padding: "10px" }}>
                <Link to={getRoute(routes.myOffersPage)}>myOffersPage</Link>
            </li>
            <li style={{ padding: "10px" }}>
                <Link to={getRoute(routes.myRequestsPage)}>myRequestsPage</Link>
            </li>
            <li style={{ padding: "10px" }}>
                <Link to={getRoute(routes.signUpPage)}>signUpPage</Link>
            </li>
            <li style={{ padding: "10px" }}>
                <Link to={getRoute(routes.userProfileEditPage, 3)}>userProfileEditPage</Link>
            </li>
            <li style={{ padding: "10px" }}>
                <Link to={getRoute(routes.userProfilePage, 3)}>userProfilePage</Link>
            </li>
            <li style={{ padding: "10px" }}>
                <Link to={getRoute(routes.loginPage)}>loginPage</Link>
            </li>
        </ul>
    );
}
