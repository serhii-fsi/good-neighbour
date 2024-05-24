import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  HomeOutlined,
  PlusCircleOutlined,
  ToTopOutlined,
  VerticalAlignBottomOutlined,
} from "@ant-design/icons";

function NavBar() {
  const user_id = 1; // Currently hardcoding the user_id
  const ownHelpRequestsPath = `/helpListView/${user_id}`;

  const menuItems = [
    {
      key: 1,
      label: <Link id="navlink1" to="/home"></Link>,
      icon: <HomeOutlined />,
    },
    {
      key: 2,
      label: <Link id="navlink2" to="/ownOfferedHelp"></Link>,
      icon: <ToTopOutlined />,
    },
    {
      key: 3,
      label: <Link id="navlink3" to="requestHelp"></Link>,
      icon: <PlusCircleOutlined />,
    },
    {
      key: 4,
      label: <Link id="navlink4" to={ownHelpRequestsPath}></Link>,
      icon: <VerticalAlignBottomOutlined />,
    },
  ];

  function handleClick(event) {
    console.log("click", event);
  }

  return (
    <footer>
      <Menu
        id="navbar"
        items={menuItems}
        mode="horizontal"
        onClick={handleClick}
      />
    </footer>
  );
}

export default NavBar;
