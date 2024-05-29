import config from "../../config.json";
import { Menu } from "antd";
import {
    SearchOutlined,
    ToTopOutlined,
    PlusCircleOutlined,
    VerticalAlignBottomOutlined,
} from "@ant-design/icons";
import "./NavBottomView.css";

const NavBottomView = ({ NavLink }) => {
    const { routes } = config;

    const menuItems = [
        {
            key: "1",
            label: (
                <NavLink id="navlink1" to={routes.offerHelpPage.path} matchExact>
                    <SearchOutlined />
                </NavLink>
            ),
        },
        {
            key: "2",
            label: (
                <NavLink id="navlink2" to={routes.myOffersPage.path} matchExact>
                    <ToTopOutlined />
                </NavLink>
            ),
        },
        {
            key: "3",
            label: (
                <NavLink id="navlink3" to={routes.requestCreatePage.path} matchExact>
                    <PlusCircleOutlined />
                </NavLink>
            ),
        },
        {
            key: "4",
            label: (
                <NavLink id="navlink4" to={routes.myRequestsPage.path} matchExact>
                    <VerticalAlignBottomOutlined />
                </NavLink>
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
