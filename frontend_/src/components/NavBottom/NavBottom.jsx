import config from "../../config.json";
import NavBottomView from "./NavBottomView";

const NavBottom = () => {
    const { routes } = config;

    return <NavBottomView routes={routes} />;
};

export default NavBottom;
