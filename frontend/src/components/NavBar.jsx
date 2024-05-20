import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to={"/user-profile"}>Profile</Link>
      <Link to={"/helplist"}>Help Requests</Link>
      <Link to={"/map"}>Requests Near You</Link>
      <Link to={"/own-helplist"}>Your Help Requests</Link>
      <Link to={"/own-offeredlist"}>Help You've Offered</Link>
    </nav>
  );
}

export default NavBar;
