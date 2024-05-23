import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { DatePicker, Space } from "antd";
import HelpList from "../components/HelpList";
import Loading from "../presentations/Loading";
import getHelpRequests from "../api";

function HelpListView() {
  const [helpList, setHelpList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const newMonth = String(month).padStart(2, "0");

  const [fromDate, setFromDate] = useState(`${year}-${newMonth}-${day}`);
  const [endDate, setEndDate] = useState(`${year + 1}-${newMonth}-${day}`);

  function handleFromDateChange(date, dateString) {
    setFromDate(dateString);
  }

  function handleEndDateChange(date, dateString) {
    setEndDate(dateString);
  }

  const [typeParams, setTypeParams] = useSearchParams();
  let typeQuery = typeParams.get("type");

  function handleTypeChange(event) {
    const newParams = new URLSearchParams(typeParams);
    newParams.set("type", event.target.value);
    setTypeParams(newParams);
    typeQuery = newParams.get("type");
  }

  useEffect(() => {
    let endpoint = `/api/help-requests?start=${fromDate}&end=${endDate}`;
    if (typeQuery) {
      endpoint += `?type=${typeQuery}`;
    }
    getHelpRequests(endpoint)
      .then((response) => {
        // console.log(response.data, "data 1");
        // console.log(response.data.helpRequestsData, "data 2");
        setHelpList(response.data.helpRequestsData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [fromDate, endDate, typeQuery]);

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
