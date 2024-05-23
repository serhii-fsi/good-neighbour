import { useState, useEffect } from "react";
import { DatePicker, Space, Menu, Tag } from "antd";
import {
  UnorderedListOutlined,
  ShoppingOutlined,
  CarOutlined,
  ClearOutlined,
  DropboxOutlined,
  ToolOutlined,
} from "@ant-design/icons";
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

  const menuItems = [
    {
      key: "menuTitle",
      label: "Filter by type of help",
      icon: <UnorderedListOutlined />,
      children: [
        {
          key: "shopping",
          label: "Shopping",
          icon: <ShoppingOutlined />,
        },
        {
          key: "rides",
          label: "Rides",
          icon: <CarOutlined />,
        },
        {
          key: "cleaning",
          label: "Cleaning",
          icon: <ClearOutlined />,
        },
        {
          key: "packages",
          label: "Packages",
          icon: <DropboxOutlined />,
        },
        {
          key: "diy",
          label: "DIY",
          icon: <ToolOutlined />,
        },
      ],
    },
  ];

  function handleAddClick(event) {
    document.getElementById(`${event.key}`).style.visibility = "visible";
  }

  const handleRemoveClick = (event) => {
    document.getElementById(`${event.target.id}`).style.visibility = "hidden";
  };

  // typeQueries.push(event.key);
  // typeQueries.push(event.target.id);

  useEffect(() => {
    // const typeQueries = [];
    // console.log(typeQueries, "typeQueries");

    let endpoint = `/api/help-requests?start=${fromDate}&end=${endDate}`;
    // if (typeQuery) {
    //   endpoint += `?type=${typeQuery}`;
    // }
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
  }, [fromDate, endDate]);

  // const newHelpList = helpList.filter((helpRequest) => {
  //   return helpRequest.req_date > fromDate && helpRequest.req_date < endDate;
  // });

  if (isLoading) {
    return <Loading text={"help requests near you"} />;
  }
  return (
    <>
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

      <Tag id="shopping" closeIcon onClick={handleRemoveClick}>
        Shopping
      </Tag>
      <Tag id="rides" closeIcon onClick={handleRemoveClick}>
        Rides
      </Tag>
      <Tag id="cleaning" closeIcon onClick={handleRemoveClick}>
        Cleaning
      </Tag>
      <Tag id="packages" closeIcon onClick={handleRemoveClick}>
        Packages
      </Tag>
      <Tag id="diy" closeIcon onClick={handleRemoveClick}>
        DIY
      </Tag>

      <Menu
        id="typeFilter"
        items={menuItems}
        mode="horizontal"
        onClick={handleAddClick}
      />

      <HelpList helpList={helpList} />
    </>
  );
}

export default HelpListView;
