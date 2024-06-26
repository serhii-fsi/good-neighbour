import { useLocation, Link, matchPath } from "react-router-dom";
import NavBottomView from "./NavBottomView";

const NavLink = ({ to, children, matchExact = false, matchPattern }) => {
    const location = useLocation();
    const isActive = matchExact
        ? location.pathname === to
        : matchPattern
        ? matchPath(location.pathname, { path: matchPattern, exact: true })
        : location.pathname.startsWith(to);

    return (
        <li className={isActive ? "active" : "inactive"}>
            <Link to={to}>{children}</Link>
        </li>
    );
};

const NavBottom = () => {
    return <NavBottomView NavLink={NavLink} />;
};

export default NavBottom;
