import { Link } from "react-router-dom";

function NavBar() {
  return (
    <footer>
      <nav>
        <Link to={"/user-profile"}>Profile</Link>
        <br />
        <Link to={"/helplist"}>Help Requests</Link>
        <br />
        <Link to={"/map"}>Requests Near You</Link>
        <br />
        <Link to={"/own-helplist"}>Your Help Requests</Link>
        <br />
        <Link to={"/own-offeredlist"}>Help You've Offered</Link>
      </nav>
    </footer>
  );
}

export default NavBar;
