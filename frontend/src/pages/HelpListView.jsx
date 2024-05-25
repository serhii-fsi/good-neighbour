import { useState, useEffect } from "react";
import { Collapse } from "antd";
import {
  UnorderedListOutlined,
  ShoppingOutlined,
  CarOutlined,
  ClearOutlined,
  DropboxOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import HelpListFilters from "../components/HelpListFilters";
import HelpList from "../components/HelpList";
import Loading from "../presentations/Loading";
import getHelpRequests from "../api";

function HelpListView() {
  const [helpList, setHelpList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [fromDate, setFromDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [shoppingQuery, setShoppingQuery] = useState("");
  const [ridesQuery, setRidesQuery] = useState("");
  const [cleaningQuery, setCleaningQuery] = useState("");
  const [packagesQuery, setPackagesQuery] = useState("");
  const [diyQuery, setDiyQuery] = useState("");

  const menuItems = [
    {
      key: "menuTitle",
      label: "Filter help requests by type",
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

  const collapsedItems = [
    {
      key: "filters",
      label: "Filters",
      children: (
        <HelpListFilters
          setFromDate={setFromDate}
          setEndDate={setEndDate}
          menuItems={menuItems}
          handleAddClick={handleAddClick}
          handleRemoveClick={handleRemoveClick}
        />
      ),
    },
  ];

  useEffect(() => {
    let endpoint = `/api/help-requests`;
    // ?start=${fromDate}&end=${endDate}
    // console.log(endpoint, "endpoint");
    if (fromDate.length && endDate.length) {
      endpoint += `?start=${fromDate}&${endDate}`;
    } else if (fromDate.length) {
      endpoint += `?start=${fromDate}`;
    } else if (endDate.length) {
      endpoint += `?end=${endDate}`;
    }
    const typeQueries = [
      shoppingQuery,
      ridesQuery,
      cleaningQuery,
      packagesQuery,
      diyQuery,
    ];
    const areTypeQueries = typeQueries.some((type) => {
      return type.length;
    });
    if (areTypeQueries) {
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
        console.log(response, "data 1");
        console.log(response.data.helpRequestsData, "data 2");
        setHelpList(response.data.helpRequestsData);
        console.log(helpList, "helpList");
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
      <br />
      <Collapse items={collapsedItems} />
      <HelpList helpList={helpList} />
    </>
  );
}

export default HelpListView;
