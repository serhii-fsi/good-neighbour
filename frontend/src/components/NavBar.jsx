import { Link } from "react-router-dom";

function NavBar() {
  return (
    <footer>
      <nav>
        <Link to="/home">Homepage/Help Requests | </Link>
        <Link to="/map">Help Map | </Link>
        <Link to="/ownHelplist">Your Help Requests | </Link>
        <Link to="/ownHelpOffered">Help You've Offered | </Link>
        <Link to="/profile">Profile | </Link>
      </nav>
    </footer>
  );
}

export default NavBar;
