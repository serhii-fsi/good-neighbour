import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import HelpListView from "../components/HelpListView";
import Loading from "../presentations/Loading";

function Homepage() {
  const [isLoading, setIsLoading] = useState(false);
  const [typeParams, setTypeParams] = useSearchParams();
  let typeQuery = typeParams.get("type");

  function handleChange(event) {
    const newParams = new URLSearchParams(typeParams);
    newParams.set("type", event.target.value);
    setTypeParams(newParams);
    typeQuery = newParams.get("type");
  }

  if (isLoading) {
    return <Loading page={"homepage"} />;
  }
  return (
    <>
      <h2>Homepage</h2>
      <Link to={"/map"}>See Map</Link>
      <br />
      <label htmlFor="types">Filter requests by type: </label>
      <select name="help-type-options" id="types" onChange={handleChange}>
        <option value="">All Help Requests</option>
        <option value="transport">Transport</option>
        <option value="household">Household</option>
        <option value="garden">Garden</option>
        <option value="vehicle">Vehicle</option>
        <option value="community">Community</option>
      </select>
      <br />
      <HelpListView />
      <br />
      <Link to={"/makehelprequest"}>Request Some Help</Link>
      <br />
      <br />
    </>
  );
}

export default Homepage;
