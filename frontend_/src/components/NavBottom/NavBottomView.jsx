import { Menu } from "antd";
import "./NavBottomView.css";

const NavBottomView = ({ passedItems }) => {
    return (
        <footer className="NavBottomView__footer">
            <Menu id="navbottom" items={passedItems} mode="horizontal" />
        </footer>
    );
};

export default NavBottomView;
