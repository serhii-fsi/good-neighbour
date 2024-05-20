import { Link } from "react-router-dom";

function NavBar() {
  return (
    <footer>
      <nav>
        <Link to={"/home"}>Homepage | </Link>
        <Link to={"/helplist"}>Help Requests | </Link>
        <Link to={"/map"}>Help Map | </Link>
        <Link to={"/own-helplist"}>Your Help Requests | </Link>
        <Link to={"/own-offeredlist"}>Help You've Offered | </Link>
        <Link to={"/user-profile"}>Profile | </Link>
      </nav>
    </footer>
  );
}

export default NavBar;
