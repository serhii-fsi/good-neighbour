import { useContext } from "react";
import { UserContext } from "../contexts/User";
import Menu from "./Menu";

function Header() {
  const { user } = useContext(UserContext);

  return (
    <>
      <h1>Good Neighbour {user}</h1>
      <Menu />
    </>
  );
}

export default Header;
