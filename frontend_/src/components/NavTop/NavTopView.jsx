import { Link } from "react-router-dom";

import { Menu } from "antd/es/";
import {
    MenuOutlined,
    UserOutlined,
    SearchOutlined,
    PlusCircleOutlined,
    ToTopOutlined,
    VerticalAlignBottomOutlined,
} from "@ant-design/icons";

import "./NavTopView.css";

import config from "../../config.json";

const NavTopView = ({ title, logo }) => {
    const { routes } = config;

    const menuItems = [
        {
            key: "menuParent",
            // label: "Menu",
            icon: <MenuOutlined />,
            children: [
                {
                    key: 1,
                    label: <Link to={routes.userProfilePage.path}>User Name</Link>,
                    icon: <UserOutlined />,
                },
                {
                    key: 2,
                    label: <Link to={routes.offerHelpPage.path}>Offer Help</Link>,
                    icon: <SearchOutlined />,
                },
                {
                    key: 3,
                    label: <Link to={routes.myHelpOffersPage.path}>My Help Offers</Link>,
                    icon: <ToTopOutlined />,
                },
                {
                    key: 4,
                    label: <Link to={routes.helpRequestCreatePage.path}>Create Help Request</Link>,
                    icon: <PlusCircleOutlined />,
                },
                {
                    key: 5,
                    label: <Link to={routes.myHelpRequestsPage.path}>My Help Requests</Link>,
                    icon: <VerticalAlignBottomOutlined />,
                },
            ],
        },
    ];
    return (
        <header>
            <h5>{logo}</h5>
            <h4>{title}</h4>
            <Menu mode="horizontal" items={menuItems} id="header__menu" />
        </header>
    );
};

export default NavTopView;
