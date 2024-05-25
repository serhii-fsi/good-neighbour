import React from "react";
import { Link } from "react-router-dom";

import {
    MenuOutlined,
    UserOutlined,
    SearchOutlined,
    PlusCircleOutlined,
    ToTopOutlined,
    VerticalAlignBottomOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";

import config from "../../config.json";

const MenuView = () => {
    const { routes } = config;

    const items = [
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
    ];

    return (
        <Space direction="vertical">
            <Space wrap>
                <Dropdown
                    menu={{
                        items,
                    }}
                    placement="bottomRight"
                    id="menu__dropdown"
                >
                    <Button type="text" icon={<MenuOutlined />}></Button>
                </Dropdown>
            </Space>
        </Space>
    );
};

export default MenuView;
