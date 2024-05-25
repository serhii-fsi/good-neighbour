import Menu from "../Menu/Menu";

import "./NavTopView.css";

const NavTopView = ({ title, logo }) => {
    return (
        <header>
            <h5>{logo}</h5>
            <h4>{title}</h4>
            <Menu />
        </header>
    );
};

export default NavTopView;
