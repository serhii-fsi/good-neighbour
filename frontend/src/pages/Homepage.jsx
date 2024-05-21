import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import HelpListView from "../components/HelpListView";
import Loading from "../presentations/Loading";
import getRequests from "../api";

function Homepage() {
  const [helpList, setHelpList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [dateParams, setDateParams] = useSearchParams();
  let dateQuery = dateParams.get("date");
  const [typeParams, setTypeParams] = useSearchParams();
  let typeQuery = typeParams.get("type");

  function handleDateChange(event) {
    const newParams = new URLSearchParams(dateParams);
    newParams.set("date", event.target.value);
    setDateParams(newParams);
    dateQuery = newParams.get("date");
  }

  function handleTypeChange(event) {
    const newParams = new URLSearchParams(typeParams);
    newParams.set("type", event.target.value);
    setTypeParams(newParams);
    typeQuery = newParams.get("type");
  }

  useEffect(() => {
    let path = "/api/requests";
    if (dateQuery) {
      path += `?date=${dateQuery}`;
    } else if (typeQuery) {
      path += `?type=${typeQuery}`;
    }
    getRequests(path)
      .then((response) => {
        setHelpList(response.data.requests);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dateQuery, typeQuery]);

  if (isLoading) {
    return <Loading text={"Homepage"} />;
  }
  return (
    <>
      <h2>Homepage</h2>
      <Link to={"/map"}>See Map</Link>
      <br />
      <label htmlFor="date">Filter requests by date needed: </label>
      <select name="date-options" id="date" onChange={handleDateChange}>
        <option value="">All Help Requests</option>
        <option value="oneday">Needed today</option>
        <option value="threedays">Needed in the next 3 days</option>
        <option value="oneweek">Needed within a week</option>
        <option value="onemonth">Needed within a month</option>
      </select>
      <br />
      <label htmlFor="types">Filter requests by type: </label>
      <select name="type-options" id="types" onChange={handleTypeChange}>
        <option value="">All Help Requests</option>
        <option value="transport">Transport</option>
        <option value="household">Household</option>
        <option value="garden">Garden</option>
        <option value="vehicle">Vehicle</option>
        <option value="community">Community</option>
      </select>
      <br />
      <HelpListView helpList={helpList} />
      <br />
      <Link to={"/helprequest"}>Request Some Help</Link>
      <br />
      <br />
    </>
  );
}

export default Homepage;
