import { Link } from "react-router-dom";

function Menu() {
  const user_id = 1; // Currently hardcoding the user_id
  const ownHelpRequestsPath = `/helpListView/${user_id}`;

  return (
    <>
      <nav>
        <Link to="/profile">Profile | </Link>
        <Link to="/home">Homepage/Offer Help | </Link>
        <Link to="/ownOfferedHelp">My Help Offers | </Link>
        <Link to="requestHelp">Create Help Request | </Link>
        <Link to={ownHelpRequestsPath}>My Help Requests</Link>
      </nav>
    </>
  );
}

export default Menu;
