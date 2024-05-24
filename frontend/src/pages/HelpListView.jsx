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

  const allTags = menuItems[0].children.map((child) => {
    return child.key;
  });

  const [shoppingQuery, setShoppingQuery] = useState("");
  const [ridesQuery, setRidesQuery] = useState("");
  const [cleaningQuery, setCleaningQuery] = useState("");
  const [packagesQuery, setPackagesQuery] = useState("");
  const [diyQuery, setDiyQuery] = useState("");

  function handleAddClick(event) {
    document.getElementById(event.key).style.visibility = "visible";
    if (event.key === allTags[0]) {
      setShoppingQuery(event.key);
    } else if (event.key === allTags[1]) {
      setRidesQuery(event.key);
    } else if (event.key === allTags[2]) {
      setCleaningQuery(event.key);
    } else if (event.key === allTags[3]) {
      setPackagesQuery(event.key);
    } else if (event.key === allTags[4]) {
      setDiyQuery(event.key);
    }
  }

  const handleRemoveClick = (event) => {
    document.getElementById(event.target.id).style.visibility = "hidden";
    if (event.target.id === allTags[0]) {
      setShoppingQuery("");
    } else if (event.target.id === allTags[1]) {
      setRidesQuery("");
    } else if (event.target.id === allTags[2]) {
      setCleaningQuery("");
    } else if (event.target.id === allTags[3]) {
      setPackagesQuery("");
    } else if (event.target.id === allTags[4]) {
      setDiyQuery("");
    }
  };

  useEffect(() => {
    let endpoint = `/api/help-requests?start=${fromDate}&end=${endDate}`;
    console.log(endpoint, "endpoint");

    const typeQueries = [
      shoppingQuery,
      ridesQuery,
      cleaningQuery,
      packagesQuery,
      diyQuery,
    ];
    const anyQueries = typeQueries.some((type) => {
      return type.length;
    });

    if (anyQueries) {
      endpoint += `&types=${shoppingQuery}`;
      for (let i = 1; i < typeQueries.length; i++) {
        if (typeQueries[i].length) {
          endpoint += `&${typeQueries[i]}`;
        }
      }
    }
    console.log(endpoint, "endpoint2");

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
  }, [
    fromDate,
    endDate,
    shoppingQuery,
    ridesQuery,
    cleaningQuery,
    packagesQuery,
    diyQuery,
  ]);

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

      <Tag id="shopping" onClick={handleRemoveClick}>
        Shopping
      </Tag>
      <Tag id="rides" onClick={handleRemoveClick}>
        Rides
      </Tag>
      <Tag id="cleaning" onClick={handleRemoveClick}>
        Cleaning
      </Tag>
      <Tag id="packages" onClick={handleRemoveClick}>
        Packages
      </Tag>
      <Tag id="diy" onClick={handleRemoveClick}>
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
