import { useContext } from "react";
import { UserContext } from "../contexts/User";
import DropdownMenu from "./Menu";
import SignupLogin from "../pages/SignupLogin";

function Header() {
  const { user } = useContext(UserContext);

  if (user) {return (
  <>
    <h1>Good Neighbour {user}</h1>
    <DropdownMenu />
  </>
  )}
  else {return (
  <>
    <h1>Good Neighbour</h1>
    <SignupLogin />
  </>
  )}
}

export default Header;
