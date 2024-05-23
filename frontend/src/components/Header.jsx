import { useContext } from "react";
import { UserContext } from "../contexts/User";
import DropdownMenu from "./Menu";

function Header() {
  const { user } = useContext(UserContext);

  return (
    <>
      <h1>Good Neighbour {user}</h1>
      <DropdownMenu />
    </>
  );
}

export default Header;
