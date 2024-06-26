import React from "react";

import { MenuOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";

import "./MenuView.css";

/**
 *
 * @param {object} props
 * @param {array} props.items
 */
const MenuView = (props) => {
    const { items } = props;
    return (
        <Space direction="vertical">
            <Space wrap>
                <Dropdown
                    menu={{
                        items,
                    }}
                    trigger={["click"]}
                    placement="bottomRight"
                >
                    <Button type="text" icon={<MenuOutlined />}></Button>
                </Dropdown>
            </Space>
        </Space>
    );
};

export default MenuView;
