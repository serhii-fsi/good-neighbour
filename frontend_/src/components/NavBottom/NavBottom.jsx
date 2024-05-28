import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
    SearchOutlined,
    ToTopOutlined,
    PlusCircleOutlined,
    VerticalAlignBottomOutlined,
} from "@ant-design/icons";
import config from "../../config.json";
import NavBottomView from "./NavBottomView";

const NavBottom = () => {
    const { routes } = config;
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

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1);
    };

    return (
        <NavBottomView
            className="NavBottom__footer"
            passedItems={menuItems}
            handleClick={handleClick}
        />
    );
};

export default NavBottom;
