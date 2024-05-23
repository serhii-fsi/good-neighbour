import { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../presentations/Loading";
import HelpListView from "./HelpListView";

function Homepage() {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <Loading text={"Homepage"} />;
  }
  return (
    <>
      <h2>Homepage</h2>
      <HelpListView />
      <br />
      <Link to={"/map"}>See Map</Link>
      <br />
      <br />
    </>
  );
}

export default Homepage;
