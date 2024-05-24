import { DatePicker, Space, Tag, Menu } from "antd";

function HelpListFilters({
  setFromDate,
  setEndDate,
  menuItems,
  handleAddClick,
  handleRemoveClick,
}) {
  function handleFromDateChange(date, dateString) {
    setFromDate(dateString);
  }
  function handleEndDateChange(date, dateString) {
    setEndDate(dateString);
  }

  return (
    <>
      <p>Filter help requests by date:</p>
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
    </>
  );
}

export default HelpListFilters;
