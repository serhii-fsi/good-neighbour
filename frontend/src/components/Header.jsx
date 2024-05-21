import { useContext } from "react";
import { UserContext } from "../contexts/User";

function Header() {

  const { user } = useContext(UserContext);

  return (
    <>
      <h1>Good Neighbour { user }</h1>
    </>
  );
}

export default Header;
