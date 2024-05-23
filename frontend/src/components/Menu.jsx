import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  MenuOutlined,
  UserOutlined,
  HomeOutlined,
  SearchOutlined,
  PlusCircleOutlined,
  ToTopOutlined,
  VerticalAlignBottomOutlined,
} from "@ant-design/icons";

function DropdownMenu() {
  const user_id = 1; // Currently hardcoding the user_id
  const ownHelpRequestsPath = `/helpListView/${user_id}`;

  const menuItems = [
    {
      key: "parent",
      label: "Menu",
      icon: <MenuOutlined />,
      children: [
        {
          key: 1,
          label: <Link to="/profile">My Profile</Link>,
          icon: <UserOutlined />,
        },
        {
          key: 2,
          label: <Link to="/home">Homepage</Link>,
          icon: <HomeOutlined />,
        },
        {
          key: 3,
          label: <Link to="/helpListView">Offer Help</Link>,
          icon: <SearchOutlined />,
        },
        {
          key: 4,
          label: <Link to="requestHelp">Create Help Request</Link>,
          icon: <PlusCircleOutlined />,
        },
        {
          key: 5,
          label: <Link to="/ownOfferedHelp">My Help Offers</Link>,
          icon: <ToTopOutlined />,
        },
        {
          key: 6,
          label: <Link to={ownHelpRequestsPath}>My Help Requests</Link>,
          icon: <VerticalAlignBottomOutlined />,
        },
      ],
    },
  ];

  function handleClick(event) {
    console.log("click", event);
  }

  return (
    <>
      <Menu
        id="dropdownMenu"
        items={menuItems}
        mode="horizontal"
        onClick={handleClick}
      />
    </>
  );
}

export default DropdownMenu;
