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
                <Link to={getRoute(routes.helpRequestCreatePage)}>helpRequestCreatePage</Link>
            </li>
            <li style={{ padding: "10px" }}>
                <Link to={getRoute(routes.helpRequestEditPage, 1)}>helpRequestEditPage</Link>
            </li>
            <li style={{ padding: "10px" }}>
                <Link to={getRoute(routes.helpRequestPage, 1)}>helpRequestPage</Link>
            </li>
            <li style={{ padding: "10px" }}>
                <Link to={getRoute(routes.myHelpOffersPage)}>myHelpOffersPage</Link>
            </li>
            <li style={{ padding: "10px" }}>
                <Link to={getRoute(routes.myHelpRequestsPage)}>myHelpRequestsPage</Link>
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
        </ul>
    );
}
