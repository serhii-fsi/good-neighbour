import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
    SearchOutlined,
    ToTopOutlined,
    PlusCircleOutlined,
    VerticalAlignBottomOutlined,
} from "@ant-design/icons";
import "./NavBottomView.css";

const NavBottomView = ({ routes }) => {
    const menuItems = [
        {
            key: "1",
            label: (
                <Link id="navlink1" to={routes.offerHelpPage.path}>
                    <SearchOutlined style={{ width: "50px" }} />
                </Link>
            ),
        },
        {
            key: "2",
            label: (
                <Link id="navlink2" to={routes.myOffersPage.path}>
                    <ToTopOutlined style={{ width: "50px" }} />
                </Link>
            ),
        },
        {
            key: "3",
            label: (
                <Link id="navlink3" to={routes.requestCreatePage.path}>
                    <PlusCircleOutlined style={{ width: "50px" }} />
                </Link>
            ),
        },
        {
            key: "4",
            label: (
                <Link id="navlink4" to={routes.myRequestsPage.path}>
                    <VerticalAlignBottomOutlined style={{ width: "50px" }} />
                </Link>
            ),
        },
    ];

    return (
        <footer className="NavBottomView__footer">
            <Menu id="navbottom" items={menuItems} mode="horizontal" />
        </footer>
    );
};

export default NavBottomView;
