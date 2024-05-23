import { Link } from "react-router-dom";
import { Menu } from "antd";
import {} from "@ant-design/icons";
function DropdownMenu() {
  const user_id = 1; // Currently hardcoding the user_id
  const ownHelpRequestsPath = `/helpListView/${user_id}`;

  const menuItems = [
    {
      key: "parent",
      label: "Menu",
      children: [
        {
          key: 1,
          label: <Link to="/profile">Profile</Link>,
        },
        {
          key: 2,
          label: <Link to="/home">Homepage</Link>,
        },
        {
          key: 3,
          label: <Link to="/helpListView">Offer Help</Link>,
        },
        {
          key: 4,
          label: <Link to="/ownOfferedHelp">My Help Offers</Link>,
        },
        {
          key: 5,
          label: <Link to="requestHelp">Create Help Request</Link>,
        },
        {
          key: 6,
          label: <Link to={ownHelpRequestsPath}>My Help Requests</Link>,
        },
      ],
    },
  ];

  function handleClick(event) {
    console.log("click", event);
  }

  return (
    <>
      <Menu items={menuItems} mode="horizontal" onClick={handleClick} />
    </>
  );
}

export default DropdownMenu;
