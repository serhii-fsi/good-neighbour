import { useContext } from "react";
import { Link } from "react-router-dom";

import {
    UserOutlined,
    SearchOutlined,
    PlusCircleOutlined,
    ToTopOutlined,
    VerticalAlignBottomOutlined,
} from "@ant-design/icons";

import { AuthContext } from "../../context/auth-context";
import MenuView from "./MenuView";
import config from "../../config.json";

const Menu = () => {
    const { routes } = config;
    const { user } = useContext(AuthContext);

    const items = [
        {
            key: 1,
            label: (
                <Link to={routes.userProfilePage.path}>
                    {user ? `${user.first_name}  ${user.last_name}` : "Profile"}
                </Link>
            ),
            icon: <UserOutlined />,
        },
        {
            key: 2,
            label: <Link to={routes.offerHelpPage.path}>Offer Help</Link>,
            icon: <SearchOutlined />,
        },
        {
            key: 3,
            label: <Link to={routes.myOffersPage.path}>My Help Offers</Link>,
            icon: <ToTopOutlined />,
        },
        {
            key: 4,
            label: <Link to={routes.requestCreatePage.path}>Create Help Request</Link>,
            icon: <PlusCircleOutlined />,
        },
        {
            key: 5,
            label: <Link to={routes.myRequestsPage.path}>My Help Requests</Link>,
            icon: <VerticalAlignBottomOutlined />,
        },
    ];

    return <MenuView items={items} />;
};

export default Menu;
