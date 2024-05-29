import config from "../../config.json";
import {
    SearchOutlined,
    ToTopOutlined,
    PlusCircleOutlined,
    VerticalAlignBottomOutlined,
} from "@ant-design/icons";
import "./NavBottomView.css";

const NavBottomView = ({ NavLink }) => {
    const { routes } = config;

    return (
        <footer className="NavBottomView__footer">
            <nav>
                <ul className="NavBottomView__ul">
                    <NavLink id="navlink1" to={routes.offerHelpPage.path} matchExact>
                        <SearchOutlined />
                    </NavLink>
                    <NavLink id="navlink2" to={routes.myOffersPage.path} matchExact>
                        <ToTopOutlined />
                    </NavLink>
                    <NavLink id="navlink3" to={routes.requestCreatePage.path} matchExact>
                        <PlusCircleOutlined />
                    </NavLink>
                    <NavLink id="navlink4" to={routes.myRequestsPage.path} matchExact>
                        <VerticalAlignBottomOutlined />
                    </NavLink>
                </ul>
            </nav>
        </footer>
    );
};

export default NavBottomView;
