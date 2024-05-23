import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { DatePicker, Space } from "antd";
import HelpList from "../components/HelpList";
import Loading from "../presentations/Loading";
import getHelpRequests from "../api";

function HelpListView() {
  const [helpList, setHelpList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const [dateParams, setDateParams] = useSearchParams();
  // let dateQuery = dateParams.get("date");
  const [typeParams, setTypeParams] = useSearchParams();
  let typeQuery = typeParams.get("type");

  function handleFromDateChange(date, dateString) {
    console.log("date:", date, "dateString:", dateString);
    fromDate = dateString;
  }

  function handleEndDateChange(date, dateString) {
    console.log("date:", date, "dateString:", dateString);
    endDate = dateString;
  }

  function handleTypeChange(event) {
    const newParams = new URLSearchParams(typeParams);
    newParams.set("type", event.target.value);
    setTypeParams(newParams);
    typeQuery = newParams.get("type");
  }

  useEffect(() => {
    let endpoint = "/api/help-requests";
    // if (dateQuery) {
    //   endpoint += `?date=${dateQuery}`;
    // } else
    if (typeQuery) {
      endpoint += `?type=${typeQuery}`;
    }
    getHelpRequests(endpoint)
      .then((response) => {
        // console.log(response.data, "data 1");
        console.log(response.data.helpRequestsData, "data 2");
        setHelpList(response.data.helpRequestsData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [
    // dateQuery,
    typeQuery,
  ]);

  // const newHelpList = helpList.filter((helpRequest) => {
  //   return helpRequest.req_date > fromDate && helpRequest.req_date < endDate;
  // });

  if (isLoading) {
    return <Loading text={"help requests near you"} />;
  }
  return (
    <>
      <p>Filter</p>
      <label htmlFor="from-date">From: </label>
      <Space id="from-date" direction="vertical">
        <DatePicker onChange={handleFromDateChange} />
      </Space>
      <br />
      <label htmlFor="end-date">To: </label>
      <Space id="end-date" direction="vertical">
        <DatePicker onChange={handleEndDateChange} />
      </Space>
      <br />
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
      <HelpList helpList={helpList} />
    </>
  );
}

export default HelpListView;
