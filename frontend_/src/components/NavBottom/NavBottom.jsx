import { useLocation, Link } from "react-router-dom";
import NavBottomView from "./NavBottomView";

const NavLink = ({ to, children, matchExact = false, matchPattern }) => {
    const location = useLocation();
    // const matchPattern = "/help-request/:help_request_id";
    const isActive = matchExact
        ? location.pathname === to
        : matchPattern
        ? matchPath(location.pathname, { path: matchPattern, exact: true })
        : location.pathname.startsWith(to);

    return (
        <div className={isActive ? "active" : "inactive"}>
            <Link to={to}>{children}</Link>
        </div>
    );
};

const NavBottom = () => {
    return <NavBottomView NavLink={NavLink} />;
};

export default NavBottom;
