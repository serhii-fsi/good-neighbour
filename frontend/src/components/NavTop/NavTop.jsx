import { useNavigate } from "react-router-dom";

import NavTopView from "./NavTopView";

/**
 *
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.logo
 * @param {boolean} props.isRootComponent
 */
const NavTop = (props) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1);
    };

    return <NavTopView {...props} onNavigateBack={handleClick} />;
};

export default NavTop;
