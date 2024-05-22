import { Link } from "react-router-dom";

function NavBar() {
  const user_id = 1; // Currently hardcoding the user_id
  const ownHelpRequestsPath = `/helpListView/${user_id}`;

  return (
    <footer>
      <nav>
        <Link to="/home">Homepage/Offer Help | </Link>
        <Link to="/ownOfferedHelp">My Help Offers | </Link>
        <Link to="requestHelp">Create Help Request | </Link>
        <Link to={ownHelpRequestsPath}>My Help Requests</Link>
      </nav>
    </footer>
  );
}

export default NavBar;
