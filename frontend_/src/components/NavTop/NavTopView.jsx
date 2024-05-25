import Menu from "../Menu/Menu";

import "./NavTopView.css";

import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";

/**
 *
 * @param {string} props.title
 * @param {boolean} props.isRootComponent
 * @param {function} props.onNavigateBack
 */

const NavTopView = ({ title, isRootComponent = true, onNavigateBack }) => {
    return (
        <header className="NavTopView__header">
            {isRootComponent ? (
                <h1>Good Neighbour</h1>
            ) : (
                <Button type="circle" icon={<LeftOutlined />} onClick={onNavigateBack}></Button>
            )}
            <h2>{title}</h2>
            <Menu />
        </header>
    );
};

export default NavTopView;
